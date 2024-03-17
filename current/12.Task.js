// url https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

function isOppo(dir1, dir2) {
  if (dir1 + dir2 === "SOUTHNORTH") return true;
  if (dir1 + dir2 === "NORTHSOUTH") return true;
  if (dir1 + dir2 === "EASTWEST") return true;
  if (dir1 + dir2 === "WESTEAST") return true;
  return false;
}

function dirReduc(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    console.log(arr[i], arr[i + 1]);
    if (isOppo(arr[i], arr[i + 1])) {
      console.log(arr);
      arr.splice(i, 2);
      console.log(arr);
      return dirReduc(arr);
    }
  }
  return arr;
}

// tak mozna
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
