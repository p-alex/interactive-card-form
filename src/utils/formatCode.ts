interface FormatCode {
  string: string;
  delimiter: string;
  by: number;
}

const formatCode = ({ string, delimiter, by }: FormatCode) => {
  const currentCode = string.replaceAll(delimiter, '');
  const arr = [];
  for (let i = 0; i < currentCode.length; i += by) {
    arr.push(currentCode.substring(i, i + by));
  }
  return arr.join(delimiter);
};

export default formatCode;
