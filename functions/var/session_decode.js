function session_decode (data) {
  // *       example: session_decode('firstName|s:5:"Kevin";midName|s:3:"van";surName|s:9:"Zonneveld"');
  // *       returns: {firstName: 'Kevin', midName: 'van', surName: 'Zonneveld'}
  
  var that = this,
    utf8Overhead = function (chr) {
      // http://phpjs.org/functions/unserialize:571#comment_95906
      var code = chr.charCodeAt(0);
      if (code < 0x0080) {
        return 0;
      }
      if (code < 0x0800) {
        return 1;
      }
      return 2;
    },
    error = function (type, msg, filename, line) {
      throw new that.window[type](msg, filename, line);
    },
    read_until = function (data, offset, stopchr) {
      var i = 2, buf = [], chr = data.slice(offset, offset + 1);

      while (chr != stopchr) {
        if ((i + offset) > data.length) {
          error('Error', 'Invalid');
        }
        buf.push(chr);
        chr = data.slice(offset + (i - 1), offset + i);
        i += 1;
      }
      return [buf.length, buf.join('')];
    },
    read_chrs = function (data, offset, length) {
      var i, chr, buf;

      buf = [];
      for (i = 0; i < length; i++) {
        chr = data.slice(offset + (i - 1), offset + i);
        buf.push(chr);
        length -= utf8Overhead(chr);
      }
      return [buf.length, buf.join('')];
    },
    _unserialize = function (data, offset) {
      var dtype, dataoffset, keyandchrs, keys,
        readdata, readData, ccount, stringlength,
        i, key, kprops, kchrs, vprops, vchrs, value,
        chrs = 0,
        typeconvert = function (x) {
          return x;
        };

      if (!offset) {
        offset = 0;
      }
      dtype = (data.slice(offset, offset + 1)).toLowerCase();

      dataoffset = offset + 2;

      switch (dtype) {
        case 'i':
          typeconvert = function (x) {
            return parseInt(x, 10);
          };
          readData = read_until(data, dataoffset, ';');
          chrs = readData[0];
          readdata = readData[1];
          dataoffset += chrs + 1;
          break;
        case 'b':
          typeconvert = function (x) {
            return parseInt(x, 10) !== 0;
          };
          readData = read_until(data, dataoffset, ';');
          chrs = readData[0];
          readdata = readData[1];
          dataoffset += chrs + 1;
          break;
        case 'd':
          typeconvert = function (x) {
            return parseFloat(x);
          };
          readData = read_until(data, dataoffset, ';');
          chrs = readData[0];
          readdata = readData[1];
          dataoffset += chrs + 1;
          break;
        case 'n':
          readdata = null;
          break;
        case 's':
          ccount = read_until(data, dataoffset, ':');
          chrs = ccount[0];
          stringlength = ccount[1];
          dataoffset += chrs + 2;

          readData = read_chrs(data, dataoffset + 1, parseInt(stringlength, 10));
          chrs = readData[0];
          readdata = readData[1];
          dataoffset += chrs + 2;
          if (chrs != parseInt(stringlength, 10) && chrs != readdata.length) {
            error('SyntaxError', 'String length mismatch');
          }
          break;
        case 'a':
          readdata = {};

          keyandchrs = read_until(data, dataoffset, ':');
          chrs = keyandchrs[0];
          keys = keyandchrs[1];
          dataoffset += chrs + 2;

          for (i = 0; i < parseInt(keys, 10); i++) {
            kprops = _unserialize(data, dataoffset);
            kchrs = kprops[1];
            key = kprops[2];
            dataoffset += kchrs;

            vprops = _unserialize(data, dataoffset);
            vchrs = vprops[1];
            value = vprops[2];
            dataoffset += vchrs;

            readdata[key] = value;
          }

          dataoffset += 1;
          break;
        default:
          error('SyntaxError', 'Unknown / Unhandled data type(s): ' + dtype);
          break;
      }
      return [dtype, dataoffset - offset, typeconvert(readdata)];
    }
  ;

  dataoffset = 0;
  var res = {};
  while (dataoffset < data.length)
  {
    keyandchrs = read_until(data, dataoffset, '|');
    chrs = keyandchrs[0];
    key = keyandchrs[1];
    dataoffset += chrs + 1;
    subdata = _unserialize((data + ''), dataoffset);
    dataoffset += subdata[1];
    res[key] = subdata[2];

  }
  return res
}
