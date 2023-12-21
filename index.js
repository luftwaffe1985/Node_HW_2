function generateName(length) {
  let nameLength = length;
  const chars = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newName = "";
  for (let i = 0; i < nameLength; i++) {
    newName += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return newName;
}

module.exports = { generateName };
