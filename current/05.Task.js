function incrementString(str) {
  // Regular expression to match the numeric part at the end of the string
  const regex = /(\d+)$/;

  // Check if the string ends with a number
  if (regex.test(str)) {
    // Extract the numeric part and increment it by 1
    return str.replace(regex, (match) => {
      // Increment the extracted number and pad with leading zeroes
      return String(Number(match) + 1).padStart(match.length, "0");
    });
  } else {
    // If the string does not end with a number, append '1' to the end
    return str + "1";
  }
}
