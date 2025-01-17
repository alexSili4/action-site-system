import { Strings } from '@/types/types';

const splitString = ({
  string,
  parts,
}: {
  string: string;
  parts: number;
}): Strings => {
  const length = string.length;
  const partLength = Math.ceil(length / parts);

  const result = [];
  let start = 0;

  for (let i = 0; i < parts - 1; i++) {
    result.push(string.slice(start, start + partLength));
    start += partLength;
  }

  result.push(string.slice(start));

  return result;
};

export default splitString;
