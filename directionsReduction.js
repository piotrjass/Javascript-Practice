function dirReduc(arr) {
  const opposite = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  return arr.reduce((acc, curr) => {
    if (acc.length > 0 && acc[acc.length - 1] === opposite[curr]) {
      acc.pop();
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

// albo klasycznie regex

function dirReduc(arr) {
  var str = arr.join(""),
    pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern, "");
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}
