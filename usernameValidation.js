function CodelandUsernameValidation(str) {
  if (str.length < 4 && str.length > 25) return false;
  if (str[str.length - 1] === "_") return false;
  const regex = /^[a-zA-Z][a-zA-Z0-9_]*$/;

  if (regex.test(str)) {
    return "true";
  } else {
    return "false";
  }
}
