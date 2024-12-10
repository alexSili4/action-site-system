import { FC } from 'react';
import { IProps } from './UnusedUserCodesModalWin.types';
// components
import AnimatedUnusedUserCodesModalWinContainer from '@CabinetPageComponents/AnimatedUnusedUserCodesModalWinContainer';

const UnusedUserCodesModalWin: FC<IProps> = ({
  setModalWinState,
  showModalWin,
}) => {
  return (
    <AnimatedUnusedUserCodesModalWinContainer
      setModalWinState={setModalWinState}
      showModalWin={showModalWin}
    >
      <div>unusedUserCodeModalWin</div>
    </AnimatedUnusedUserCodesModalWinContainer>
  );
};

export default UnusedUserCodesModalWin;
