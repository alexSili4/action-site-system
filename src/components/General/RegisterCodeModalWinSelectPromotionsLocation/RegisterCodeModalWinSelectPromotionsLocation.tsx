import { FC } from 'react';
import LocationFilter from '@GeneralComponents/LocationFilter';
import RegisterCodeModalWinSelectPromotionsLocationContent from '@GeneralComponents/RegisterCodeModalWinSelectPromotionsLocationContent';
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
      <RegisterCodeModalWinSelectPromotionsLocationContent>
        <LocationFilter />
      </RegisterCodeModalWinSelectPromotionsLocationContent>
    </AnimatedRegisterCodeModalWinContainer>
  );
};

export default RegisterCodeModalWinSelectPromotionsLocation;
