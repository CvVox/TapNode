var taps = {
  grid: "        1	2	3	4	5 \n    1	A	B	C/K	D	E \n    2	F	G	H	I	J \n    3	L	M	N	O	P \n    4	Q	R	S	T	U \n    5	V	W	X	Y	Z ",
  gridArr: [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z']
  ],
  encode: function (call) {
    var output = [];
    call = call || '';
    if (call.length < 1) {
      return;
    }
    if (call.match(/[A-Za-z]/g) !== null) {
      call = call.toUpperCase()
        .replace('K', 'C')
        .match(/[A-Za-z]/g);
      call.forEach(function (letter, i) {
        taps.gridArr.forEach(function (row, rowI) {
          if (row.indexOf(letter) >= 0) output.push(Array(rowI + 2).join("."),
                                                    Array(row.indexOf(letter) + 2).join("."));
        });
      });
      return output.join(' ');
    }
    return;
  },
  decode: function (call) {
    var output = [];
    call = call || '';
    if (call.length < 1) {
      return;
    }
    call = call.match(/(\.+)(\s{1})(\.+)/g);
    if (call === null || call.length < 1) return 'Error, invalid input.';
    call.forEach(function (p, i) {
      p = p.split(' ');
      output.push(taps.gridArr[p[0].length - 1][p[1].length - 1]);
    });

    return output.join('');
  },
  unsure: function (call) {
    if (call.match(/[A-Za-z]/g) !== null) return taps.encode(call);
    else return taps.decode(call);
  }

};

module.exports = taps;

/* CLI Stuff: */
if(typeof(process.argv[2] ) != "undefined"){
  if(process.argv[2]==="-h" || process.argv[2]==="--help")  console.log(taps.grid);
  if(process.argv[2]==="-e" || process.argv[2]==="--encode")console.log(taps.encode(process.argv[3]));
  if(process.argv[2]==="-d" || process.argv[2]==="--decode")console.log(taps.decode(process.argv[3]));
}