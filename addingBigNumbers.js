function add(a, b) {
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");
  la = a.length;
  lb = b.length;
  var temp = [];
  var bit = 0;
  for (var i = 0; i < Math.max(la, lb); i++) {
    if (i >= la) {
      var cur = Number(b[i]);
    } else if (i >= lb) {
      var cur = Number(a[i]);
    } else {
      var cur = Number(a[i]) + Number(b[i]);
    }
    temp.push((cur + bit) % 10);
    bit = Math.floor((cur + bit) / 10);
  }
  if (bit == 1) {
    temp.push(1);
  }
  var ans = "";
  for (var i = temp.length - 1; i >= 0; i--) ans += temp[i];
  return ans;
}

// albo

function add(a, b) {
  var carry = 0,
    result = [],
    len = Math.max(a.length, b.length),
    i = len;
  while (i--) {
    var sum =
      (+a[i - len + a.length] || 0) + (+b[i - len + b.length] || 0) + carry;
    carry = parseInt(sum / 10);
    result.unshift(sum % 10);
  }
  if (carry) result.unshift(carry);
  return result.join("");
}
