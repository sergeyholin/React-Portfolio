export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function checkText(input) {
  const text = /^[A-Za-z/.]{1,10000}$/;
  if (input.match(text)) {
    return true;
  }
  return false;
}

export function checkName(input) {
  const name = /^[A-Za-z]{1,50}$/;
  if (input.match(name)) {
    return true;
  }
  return false;
}
