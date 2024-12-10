import { FC } from 'react';
import { IProps } from './RegisterCodeModalWinSelectPromotion.types';
// components
import RegisterCodeModalWinSelectPromotionsFilter from '@GeneralComponents/RegisterCodeModalWinSelectPromotionsFilter';
import AnimatedRegisterCodeModalWinContainer from '@GeneralComponents/AnimatedRegisterCodeModalWinContainer';
import PromotionFilter from '@GeneralComponents/PromotionFilter';

const RegisterCodeModalWinSelectPromotion: FC<IProps> = ({
  setModalWinState,
  showModalWin,
}) => {
  return (
    <AnimatedRegisterCodeModalWinContainer
      setModalWinState={setModalWinState}
      showModalWin={showModalWin}
    >
      <RegisterCodeModalWinSelectPromotionsFilter>
        <PromotionFilter toggleShowSelectPromotionModalWin={setModalWinState} />
      </RegisterCodeModalWinSelectPromotionsFilter>
    </AnimatedRegisterCodeModalWinContainer>
  );
};

export default RegisterCodeModalWinSelectPromotion;
