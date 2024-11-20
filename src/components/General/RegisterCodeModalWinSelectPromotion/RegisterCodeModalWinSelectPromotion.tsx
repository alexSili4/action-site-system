import { FC } from 'react';
import RegisterCodeModalWinSelectPromotionsFilter from '@GeneralComponents/RegisterCodeModalWinSelectPromotionsFilter';
import AnimatedRegisterCodeModalWinContainer from '@GeneralComponents/AnimatedRegisterCodeModalWinContainer';
import { IProps } from './RegisterCodeModalWinSelectPromotion.types';
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
        <PromotionFilter />
      </RegisterCodeModalWinSelectPromotionsFilter>
    </AnimatedRegisterCodeModalWinContainer>
  );
};

export default RegisterCodeModalWinSelectPromotion;
