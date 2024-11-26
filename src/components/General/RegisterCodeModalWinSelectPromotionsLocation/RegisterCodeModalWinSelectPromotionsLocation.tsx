import { FC } from 'react';
import { IProps } from './RegisterCodeModalWinSelectPromotionsLocation.types';
// components
import LocationFilter from '@GeneralComponents/LocationFilter';
import RegisterCodeModalWinSelectPromotionsFilter from '@GeneralComponents/RegisterCodeModalWinSelectPromotionsFilter';
import AnimatedRegisterCodeModalWinContainer from '@GeneralComponents/AnimatedRegisterCodeModalWinContainer';

const RegisterCodeModalWinSelectPromotionsLocation: FC<IProps> = ({
  setModalWinState,
  showModalWin,
  toggleShowSelectPromotionsLocationModalWin,
}) => {
  return (
    <AnimatedRegisterCodeModalWinContainer
      setModalWinState={setModalWinState}
      showModalWin={showModalWin}
    >
      <RegisterCodeModalWinSelectPromotionsFilter>
        <LocationFilter
          toggleShowSelectPromotionsLocationModalWin={
            toggleShowSelectPromotionsLocationModalWin
          }
          isModalWin
        />
      </RegisterCodeModalWinSelectPromotionsFilter>
    </AnimatedRegisterCodeModalWinContainer>
  );
};

export default RegisterCodeModalWinSelectPromotionsLocation;
