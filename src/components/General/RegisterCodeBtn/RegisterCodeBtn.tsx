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
  usePreviewPage,
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
  const isUnusedUserCodes = useIsUnusedUserCodes();
  const cabinetState = useCabinetState({ isRedirectFromRegCodePage: true });
  const isOnePromotion = promotions.length === 1;
  const isDefaultLink = !isPromotionDetailsPage && !isPromotionsPage;
  const { isPreviewPage } = usePreviewPage();

  const registerTargetPromotionCodeLink = useRegisterTargetPromotionCodeLink();
  const unusedUserCodeLink = useUnusedUserCodeLink();
  const registerOnePromotionCodeLink = useRegisterOnePromotionCodeLink();
  const targetRegisterTargetPromotionCodeLink = isPreviewPage
    ? ''
    : registerTargetPromotionCodeLink;
  const targetUnusedUserCodeLink = isPreviewPage ? '' : unusedUserCodeLink;
  const targetRegisterOnePromotionCodeLink = isPreviewPage
    ? ''
    : registerOnePromotionCodeLink;

  return isUnusedUserCodes ? (
    <>
      {isCabinetPage ? (
        <StyledLink to={targetUnusedUserCodeLink} isPreviewPage={isPreviewPage}>
          {Messages.regCodeElementTitle}
        </StyledLink>
      ) : (
        <StyledLink
          to={PagePaths.cabinet}
          state={cabinetState}
          isPreviewPage={isPreviewPage}
        >
          {Messages.regCodeElementTitle}
        </StyledLink>
      )}
    </>
  ) : (
    <>
      {isPromotionDetailsPage && (
        <StyledLink
          to={targetRegisterTargetPromotionCodeLink}
          isPreviewPage={isPreviewPage}
        >
          {Messages.regCodeElementTitle}
        </StyledLink>
      )}
      {isPromotionsPage &&
        (isOnePromotion ? (
          <StyledLink
            to={targetRegisterOnePromotionCodeLink}
            isPreviewPage={isPreviewPage}
          >
            {Messages.regCodeElementTitle}
          </StyledLink>
        ) : (
          <Button
            type='button'
            onClick={onRegisterCodeBtnClickOnPromotionPage}
            disabled={isPreviewPage}
          >
            {Messages.regCodeElementTitle}
          </Button>
        ))}
      {isDefaultLink && (
        <Button
          type='button'
          onClick={onRegisterCodeBtnClickOnAllPages}
          disabled={isPreviewPage}
        >
          {Messages.regCodeElementTitle}
        </Button>
      )}
    </>
  );
};

export default RegisterCodeBtn;
