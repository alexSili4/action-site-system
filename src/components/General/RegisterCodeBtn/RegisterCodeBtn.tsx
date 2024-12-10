import { FC } from 'react';
import {
  useIsPromotionDetailsPage,
  useRegisterTargetPromotionCodeLink,
  useIsPromotionsPage,
  useRegisterOnePromotionCodeLink,
  useIsUnusedUserCodes,
  useCabinetState,
  useIsCabinetPage,
  useUnusedUserCodeLink,
} from '@/hooks';
import { Button, StyledLink } from './RegisterCodeBtn.styled';
import { IProps } from './RegisterCodeBtn.types';
import { usePromotionsStore } from '@/store/store';
import { selectPromotions } from '@/store/promotions/selectors';
import { Messages, PagePaths } from '@/constants';

const RegisterCodeBtn: FC<IProps> = ({
  onRegisterCodeBtnClickOnAllPages,
  onRegisterCodeBtnClickOnPromotionPage,
}) => {
  const isCabinetPage = useIsCabinetPage();
  const isPromotionDetailsPage = useIsPromotionDetailsPage();
  const isPromotionsPage = useIsPromotionsPage();
  const promotions = usePromotionsStore(selectPromotions);
  const registerTargetPromotionCodeLink = useRegisterTargetPromotionCodeLink();
  const unusedUserCodeLink = useUnusedUserCodeLink();
  const registerOnePromotionCodeLink = useRegisterOnePromotionCodeLink();
  const isUnusedUserCodes = useIsUnusedUserCodes();
  const cabinetState = useCabinetState({ isRedirectFromRegCodePage: true });
  const isOnePromotion = promotions.length === 1;
  const isDefaultLink = !isPromotionDetailsPage && !isPromotionsPage;

  return isUnusedUserCodes ? (
    <>
      {isCabinetPage ? (
        <StyledLink to={unusedUserCodeLink}>
          {Messages.regCodeElementTitle}
        </StyledLink>
      ) : (
        <StyledLink to={PagePaths.cabinet} state={cabinetState}>
          {Messages.regCodeElementTitle}
        </StyledLink>
      )}
    </>
  ) : (
    <>
      {isPromotionDetailsPage && (
        <StyledLink to={registerTargetPromotionCodeLink}>
          {Messages.regCodeElementTitle}
        </StyledLink>
      )}
      {isPromotionsPage &&
        (isOnePromotion ? (
          <StyledLink to={registerOnePromotionCodeLink}>
            {Messages.regCodeElementTitle}
          </StyledLink>
        ) : (
          <Button type='button' onClick={onRegisterCodeBtnClickOnPromotionPage}>
            {Messages.regCodeElementTitle}
          </Button>
        ))}
      {isDefaultLink && (
        <Button type='button' onClick={onRegisterCodeBtnClickOnAllPages}>
          {Messages.regCodeElementTitle}
        </Button>
      )}
    </>
  );
};

export default RegisterCodeBtn;
