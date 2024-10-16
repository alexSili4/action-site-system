import { IGetCurrentInputIndex } from '@/types/code.types';

const getCurrentInputIndex = ({
  currentInput,
  regCodeInputs,
}: IGetCurrentInputIndex) =>
  regCodeInputs.findIndex((item) => item === currentInput);

export default getCurrentInputIndex;
