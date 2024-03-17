// url https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(likes) {
  switch (likes.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${likes[0]} likes this`;
    case 2:
      return `${likes[0]} and ${likes[1]} like this`;
    case 3:
      return `${likes[0]}, ${likes[1]} and ${likes[2]} like this`;
    default:
      return `${likes[0]}, ${likes[1]} and ${
        likes.length - 2
      } others like this`;
  }
}

// easyyy
