import { FC, useState } from 'react';
import { IProps } from './PrizeWheelSection.types';
import {
  Wheel,
  Sector,
  Button,
  Container,
  Image,
} from './PrizeWheelSection.styled';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const PrizeWheelSection: FC<IProps> = ({ prizes, spinningMs, maxSpins }) => {
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [totalDegrees, setTotalDegrees] = useState<number>(0);

  const spinWheel = (prizeId: number) => {
    if (isSpinning) {
      return;
    }

    setIsSpinning(true);

    const degreesPerSector = 360 / prizes.length;
    const baseRotation = degreesPerSector * prizeId;
    const randomOffset = Math.random() * 30 - 15;
    const targetDegree = 360 - (baseRotation + randomOffset);
    const randomSpins = Math.floor(Math.random() * maxSpins) + maxSpins;
    const totalDegrees = randomSpins * 360 + targetDegree;

    setTotalDegrees(totalDegrees);

    setTimeout(() => {
      setIsSpinning(false);
      alert(`Приз ${prizeId + 1}!`);
    }, spinningMs);
  };

  const onSpinWheelBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    const prizeId = Math.floor(Math.random() * prizes.length);
    spinWheel(prizeId);
  };

  return (
    <Container>
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
      <Button type='button' onClick={onSpinWheelBtnClick}>
        Spin
      </Button>
    </Container>
  );
};

export default PrizeWheelSection;
