import { FC } from 'react';
import LocationFilter from '@GeneralComponents/LocationFilter';
import RegisterCodeModalWinSelectPromotionsFilter from '@GeneralComponents/RegisterCodeModalWinSelectPromotionsFilter';
import AnimatedRegisterCodeModalWinContainer from '@GeneralComponents/AnimatedRegisterCodeModalWinContainer';
import { IProps } from './RegisterCodeModalWinSelectPromotionsLocation.types';

const RegisterCodeModalWinSelectPromotionsLocation: FC<IProps> = ({
  setModalWinState,
  showModalWin,
}) => {
  return (
    <AnimatedRegisterCodeModalWinContainer
      setModalWinState={setModalWinState}
      showModalWin={showModalWin}
    >
      <RegisterCodeModalWinSelectPromotionsFilter>
        <LocationFilter isModalWin />
      </RegisterCodeModalWinSelectPromotionsFilter>
    </AnimatedRegisterCodeModalWinContainer>
  );
};

export default RegisterCodeModalWinSelectPromotionsLocation;
