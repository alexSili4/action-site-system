import { FC } from 'react';
import { IProps } from './UnusedUserCodesModalWin.types';
// components
import UnusedCouponIcon from '@/icons/cabinet/unusedCoupon.svg?react';
import AnimatedUnusedUserCodesModalWinContainer from '@CabinetPageComponents/AnimatedUnusedUserCodesModalWinContainer';
import { useRegisterUnusedCodeState, useUnusedUserCodeLink } from '@/hooks';
import { IconWrap, StyledLink, Title } from './UnusedUserCodesModalWin.styled';

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
      <IconWrap>
        <UnusedCouponIcon />
      </IconWrap>
      <Title>Будь ласка, завершіть реєстрацію вашого коду!</Title>
      <StyledLink to={unusedUserCodeLink} state={registerCodeState}>
        Продовжити
      </StyledLink>
    </AnimatedUnusedUserCodesModalWinContainer>
  );
};

export default UnusedUserCodesModalWin;
