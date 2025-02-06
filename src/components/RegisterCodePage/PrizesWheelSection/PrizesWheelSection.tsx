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
  Delimiter,
} from './PrizesWheelSection.styled';
import circle from '@/images/code/circle-min.png';
import pointer from '@/images/code/pointer-min.png';
import { usePrizesWheelSection } from '@/hooks';
import { getFileUrl } from '@/utils';
import { BiLock } from 'react-icons/bi';
// components
import AnimatedPrizeWheelModalWinContainer from '@RegisterCodePageComponents/AnimatedPrizeWheelModalWinContainer';
import { theme } from '@/constants';

const PrizesWheelSection: FC<IProps> = ({
  partners,
  spinningMs,
  maxSpins,
  moveToNextStep,
  codeId,
}) => {
  const {
    totalDegrees,
    onSpinWheelBtnClick,
    isWheelSpun,
    targetPrize,
    sectorSize,
    sectorGradientStart,
    isOddPartnersNumber,
  } = usePrizesWheelSection({
    partners,
    spinningMs,
    maxSpins,
    codeId,
  });

  return (
    <>
      <Container>
        <Content>
          <WheelWrap>
            <Wheel totalDegrees={totalDegrees} spinningMs={spinningMs}>
              {partners.map(({ id, logo, in_stock: inStock }, index) => {
                const number = index + 1;
                const logoUrl = getFileUrl(logo);
                const isLockPrize = !inStock;
                const sectorRotate = sectorSize * (number - 1);
                const delimiterRotate = sectorSize / 2;

                return (
                  <Sector
                    key={id}
                    isLockPrize={isLockPrize}
                    number={number}
                    size={sectorSize}
                    rotate={sectorRotate}
                    gradientStart={sectorGradientStart}
                    isOddPartnersNumber={isOddPartnersNumber}
                  >
                    <Image src={logoUrl} isLockPrize={isLockPrize} />
                    {isLockPrize && (
                      <BiLock size={theme.iconSizes.prizesWheelLock} />
                    )}
                    <Delimiter
                      rotate={delimiterRotate}
                      isOddPartnersNumber={isOddPartnersNumber}
                    />
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
