export default function isValidEmail(email) {
  const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailFormat)) {
    return true;
  }
  return false;
}
