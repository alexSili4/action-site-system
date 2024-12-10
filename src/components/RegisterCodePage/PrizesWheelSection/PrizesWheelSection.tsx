import { FC } from 'react';
import { IProps } from './PrizesWheelSection.types';
import {
  Wheel,
  SpinWheelBtn,
  Content,
  Image,
  WheelWrap,
  CircleImg,
  PointerImg,
  Container,
  Sector,
  Backdrop,
} from './PrizesWheelSection.styled';
import circle from '@/images/code/circle.png';
import pointer from '@/images/code/pointer.png';
import { usePrizesWheelSection } from '@/hooks';
import { getFileUrl } from '@/utils';
// components
import AnimatedPrizeWheelModalWinContainer from '@RegisterCodePageComponents/AnimatedPrizeWheelModalWinContainer';

const PrizesWheelSection: FC<IProps> = ({
  partners,
  spinningMs,
  maxSpins,
  moveToNextStep,
  codeId,
}) => {
  const { totalDegrees, onSpinWheelBtnClick, isWheelSpun, targetPrize } =
    usePrizesWheelSection({ partners, spinningMs, maxSpins, codeId });

  return (
    <>
      <Container>
        <Content>
          <WheelWrap>
            <Wheel totalDegrees={totalDegrees} spinningMs={spinningMs}>
              {partners.map(({ id, logo, in_stock: inStock }, index) => {
                const number = index + 1;
                const logoUrl = getFileUrl(logo);
                const shouldShowBackdrop = Boolean(!inStock);

                return (
                  <Sector key={id} number={number} length={partners.length}>
                    {shouldShowBackdrop && (
                      <Backdrop number={number} length={partners.length} />
                    )}
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
