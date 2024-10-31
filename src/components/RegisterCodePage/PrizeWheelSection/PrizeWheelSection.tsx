import { FC, useState } from 'react';
import { IProps } from './PrizeWheelSection.types';
import {
  Wheel,
  Sector,
  SpinWheelBtn,
  Container,
  Image,
  WheelWrap,
  CircleImg,
  PointerImg,
} from './PrizeWheelSection.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import circle from '@/images/code/circle.png';
import pointer from '@/images/code/pointer.png';
import AnimatedPrizeWheelModalWinContainer from '@RegisterCodePageComponents/AnimatedPrizeWheelModalWinContainer';

const PrizeWheelSection: FC<IProps> = ({
  prizes,
  spinningMs,
  maxSpins,
  moveToNextStep,
}) => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [totalDegrees, setTotalDegrees] = useState<number>(0);
  const [prizeIdx] = useState<number>(() =>
    Math.floor(Math.random() * prizes.length)
  );
  const [isWheelSpun, setIsWheelSpun] = useState<boolean>(false);

  const targetPrize = prizes.find((_, idx) => idx === prizeIdx);

  const spinWheel = (prizeIdx: number) => {
    if (isSpinning) {
      return;
    }

    setIsSpinning(true);

    const degreesPerSector = 360 / prizes.length;
    const baseRotation = degreesPerSector * prizeIdx;
    const randomOffset = Math.random() * 30 - 15;
    const targetDegree = 360 - (baseRotation + randomOffset);
    const randomSpins = Math.floor(Math.random() * maxSpins) + maxSpins;
    const totalDegrees = randomSpins * 360 + targetDegree;

    setTotalDegrees(totalDegrees);

    setTimeout(() => {
      setIsSpinning(false);
      setIsWheelSpun(true);
    }, spinningMs);
  };

  const onSpinWheelBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    if (isWheelSpun) {
      return;
    }

    spinWheel(prizeIdx);
  };

  return (
    <>
      <Container>
        <WheelWrap>
          <PointerImg src={pointer} />
          <CircleImg src={circle} />
          <Wheel totalDegrees={totalDegrees} spinningMs={spinningMs}>
            {prizes.map(({ id, icon }, index, array) => {
              const number = index + 1;

              return (
                <Sector key={id} number={number} length={array.length}>
                  <Image src={icon} />
                </Sector>
              );
            })}
          </Wheel>
        </WheelWrap>
        <SpinWheelBtn
          type='button'
          onClick={onSpinWheelBtnClick}
          disabled={isWheelSpun}
        >
          Крутити
        </SpinWheelBtn>
      </Container>
      {targetPrize && (
        <AnimatedPrizeWheelModalWinContainer
          // showModalWin={isWheelSpun}
          showModalWin={true}
          moveToNextStep={moveToNextStep}
          targetPrize={targetPrize}
        />
      )}
    </>
  );
};

export default PrizeWheelSection;
