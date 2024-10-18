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
import pointerUrl from '@/images/code/pointer.png';

const PrizeWheelSection: FC<IProps> = ({ prizes, spinningMs, maxSpins }) => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [totalDegrees, setTotalDegrees] = useState<number>(0);

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
      const prize = prizes.find((_, idx) => idx === prizeIdx);
      alert(`Приз ${prize?.name}!`);
    }, spinningMs);
  };

  const onSpinWheelBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    const prizeIdx = Math.floor(Math.random() * prizes.length);
    spinWheel(prizeIdx);
  };

  return (
    <Container>
      <WheelWrap>
        <PointerImg src={pointerUrl} />
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
      <SpinWheelBtn type='button' onClick={onSpinWheelBtnClick}>
        Крутити
      </SpinWheelBtn>
    </Container>
  );
};

export default PrizeWheelSection;
