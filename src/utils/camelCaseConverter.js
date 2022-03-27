export default function convertToPlainText(text) {
  const result = text.replace(/([A-Z])/g, " $1");
  return result
    .charAt(0)
    .toUpperCase()
    .concat(result.slice(1));
}
