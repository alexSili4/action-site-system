import { IGetRegCodeSteps } from '@/types/code.types';
import { Numbers } from '@/types/types';

const getRegCodeSteps = ({
  shouldShowPrizesWheel,
  stepsSequence,
}: IGetRegCodeSteps): Numbers => {
  const steps: Numbers = [];
  const keys = Object.keys(stepsSequence);

  const lastIndex = keys.length - 1;
  const counter = shouldShowPrizesWheel ? lastIndex : lastIndex - 1;

  for (let i = 0; i <= counter; i += 1) {
    steps.push(i + 1);
  }

  return steps;
};

export default getRegCodeSteps;
