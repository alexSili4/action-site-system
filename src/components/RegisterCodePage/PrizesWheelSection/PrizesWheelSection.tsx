import { FC } from 'react';
import { IProps } from './PrizesWheelSection.types';
import {
  Wheel,
  Sector,
  SpinWheelBtn,
  Content,
  Image,
  WheelWrap,
  CircleImg,
  PointerImg,
  Container,
} from './PrizesWheelSection.styled';
import circle from '@/images/code/circle.png';
import pointer from '@/images/code/pointer.png';
// components
import AnimatedPrizeWheelModalWinContainer from '@RegisterCodePageComponents/AnimatedPrizeWheelModalWinContainer';
import { usePrizesWheelSection } from '@/hooks';

const PrizesWheelSection: FC<IProps> = ({
  prizes,
  spinningMs,
  maxSpins,
  moveToNextStep,
}) => {
  const {
    totalDegrees,
    prizeIdx,
    onSpinWheelBtnClick,
    isWheelSpun,
    targetPrize,
  } = usePrizesWheelSection({ prizes, spinningMs, maxSpins });

  return (
    <>
      <Container>
        <Content>
          <WheelWrap>
            <Wheel
              totalDegrees={totalDegrees}
              spinningMs={spinningMs}
              shouldStopWheel={Boolean(prizeIdx)}
            >
              {prizes.map(({ id, icon }, index, array) => {
                const number = index + 1;

                return (
                  <Sector key={id} number={number} length={array.length}>
                    <Image src={icon} />
                  </Sector>
                );
              })}
            </Wheel>
            <CircleImg src={circle} />
            <PointerImg src={pointer} />
          </WheelWrap>
          <SpinWheelBtn
            type='button'
            onClick={onSpinWheelBtnClick}
            disabled={isWheelSpun}
          >
            Крутити
          </SpinWheelBtn>
        </Content>
      </Container>
      {targetPrize && (
        <AnimatedPrizeWheelModalWinContainer
          showModalWin={isWheelSpun}
          moveToNextStep={moveToNextStep}
          targetPrize={targetPrize}
        />
      )}
    </>
  );
};

export default PrizesWheelSection;
