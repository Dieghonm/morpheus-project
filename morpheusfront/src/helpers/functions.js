// Função para converter uma string em um array
export function stringToArray(string) {
  const stringWithoutBrackets = string.slice(1, -1);
  const array = stringWithoutBrackets.split(',').map(item => item.trim());
  return array;
}

// Função para converter um array de volta para uma string
export function arrayToString(array) {
  const string = `[${array.join(', ')}]`;
  return string;
}