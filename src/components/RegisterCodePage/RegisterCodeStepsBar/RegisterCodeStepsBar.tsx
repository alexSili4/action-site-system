import { FC } from 'react';
import {
  Completed,
  Container,
  ListItem,
  Progress,
  ProgressList,
  Step,
  Title,
  ProgressListWrap,
} from './RegisterCodeStepsBar.styled';
import { IProps } from './RegisterCodeStepsBar.types';

const RegisterCodeStepsBar: FC<IProps> = ({
  isHiddenOnMobile,
  steps,
  currentStep,
}) => {
  const lastStepIndex = steps.length - 1;
  const lastStep = steps[lastStepIndex];

  return (
    <Container isHiddenOnMobile={isHiddenOnMobile}>
      <Title>Реєстрація акційного коду</Title>
      <ProgressListWrap>
        <Step>
          Крок {currentStep} із {lastStep}
        </Step>
        <ProgressList>
          {steps.map((step) => (
            <ListItem key={step} stepsCount={steps.length}>
              <Progress>
                <Completed currentStep={currentStep}></Completed>
              </Progress>
            </ListItem>
          ))}
        </ProgressList>
      </ProgressListWrap>
    </Container>
  );
};

export default RegisterCodeStepsBar;
