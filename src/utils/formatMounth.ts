const formatMounth = (string: string) => {
  const currentString = string.replace(/0/, '');
  if (string.length === 1) {
    return '0' + string;
  }
  return currentString;
};

export default formatMounth;
