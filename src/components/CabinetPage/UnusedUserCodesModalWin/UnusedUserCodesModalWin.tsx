import { FC } from 'react';
import { IProps } from './UnusedUserCodesModalWin.types';
import { Link } from 'react-router-dom';
// components
import AnimatedUnusedUserCodesModalWinContainer from '@CabinetPageComponents/AnimatedUnusedUserCodesModalWinContainer';
import { useRegisterUnusedCodeState, useUnusedUserCodeLink } from '@/hooks';

const UnusedUserCodesModalWin: FC<IProps> = ({
  setModalWinState,
  showModalWin,
}) => {
  const unusedUserCodeLink = useUnusedUserCodeLink();
  const registerCodeState = useRegisterUnusedCodeState();

  return (
    <AnimatedUnusedUserCodesModalWinContainer
      setModalWinState={setModalWinState}
      showModalWin={showModalWin}
    >
      <div>unusedUserCodeModalWin</div>
      <Link to={unusedUserCodeLink} state={registerCodeState}>
        RegCode
      </Link>
    </AnimatedUnusedUserCodesModalWinContainer>
  );
};

export default UnusedUserCodesModalWin;
