function rot(input, key) {
  function rotated(char,offset){
    return String.fromCharCode((((c - offset + key)%26)+26)%26 + offset);
  }
  var output = "";
		for (var i = 0; i < input.length; i++) {
		var c = input.charCodeAt(i);
		if      (c >= 65 && c <=  90) output += rotated(c,65);  // Uppercase
		else if (c >= 97 && c <= 122) output += rotated(c,97);  // Lowercase
		else                          output += input.charAt(i);  // Copy
	}
	return output;
}

function vigenere(input, keyword) {
  var key = [];
  var i, j, c;
  for (i = 0; i < keyword.length; i++) {
		c = keyword.charCodeAt(i);
		if (c >= 65 && c <=  90 || c >= 97 && c <= 122)
			key.push((26 - (c - 65) % 32) % 26);
	}
  if(key.length == 0) key.push(0);

  var output = "";
	for (i = 0, j = 0; i < input.length; i++) {
		c = input.charCodeAt(i);
		if (c >= 65 && c <=  90) {
			output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
			j++;
		} else if (c >= 97 && c <= 122) {
			output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
			j++;
		} else {
			output += input.charAt(i);
		}
	}
	return output;
}

function codes(str,base){
  return str.split(/\s+/g).map(function(n){
    return String.fromCharCode(parseInt(n,base))}).join('');
}

if(!window.atob) (function(chars){
  window.atob = function (input) {
    input = input.replace(/=+$/, '');
    if (input.length % 4 == 1) throw new Error('improper base64 length');
    for (
      // initialize result and counters
      var bc = 0, bs, buffer, idx = 0, output = '';
      // get next character
      buffer = input.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        // and if not first of each 4 characters,
        // convert the first 8 bits to one ascii character
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }
    return output;
  };
})('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=');