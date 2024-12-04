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
import { getFileUrl } from '@/utils';

const PrizesWheelSection: FC<IProps> = ({
  partners,
  spinningMs,
  maxSpins,
  moveToNextStep,
}) => {
  const { totalDegrees, onSpinWheelBtnClick, isWheelSpun, targetPartner } =
    usePrizesWheelSection({ partners, spinningMs, maxSpins });

  return (
    <>
      <Container>
        <Content>
          <WheelWrap>
            <Wheel totalDegrees={totalDegrees} spinningMs={spinningMs}>
              {partners.map(({ id, logo }, index) => {
                const number = index + 1;
                const logoUrl = getFileUrl(logo);

                return (
                  <Sector key={id} number={number} length={partners.length}>
                    <Image src={logoUrl} />
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
      {targetPartner && (
        <AnimatedPrizeWheelModalWinContainer
          showModalWin={isWheelSpun}
          moveToNextStep={moveToNextStep}
          targetPartner={targetPartner}
        />
      )}
    </>
  );
};

export default PrizesWheelSection;
