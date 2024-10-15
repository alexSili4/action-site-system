import { IStepsSequence } from '@/types/code.types';
import { Numbers } from '@/types/types';

const getRegCodeSteps = (stepsSequence: IStepsSequence): Numbers => {
  const steps: Numbers = [];
  const keys = Object.keys(stepsSequence);

  for (let i = 0; i <= keys.length - 1; i += 1) {
    steps.push(i + 1);
  }

  return steps;
};

export default getRegCodeSteps;
