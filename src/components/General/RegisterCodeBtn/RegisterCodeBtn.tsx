import { FC } from 'react';
import {
  useIsPromotionDetailsPage,
  useRegisterTargetPromotionCodeLink,
  useIsPromotionsPage,
  useRegisterOnePromotionCodeLink,
} from '@/hooks';
import { Button, StyledLink } from './RegisterCodeBtn.styled';
import { IProps } from './RegisterCodeBtn.types';
import { usePromotionsStore } from '@/store/store';
import { selectPromotions } from '@/store/promotions/selectors';

const RegisterCodeBtn: FC<IProps> = ({
  onRegisterCodeBtnClickOnAllPages,
  onRegisterCodeBtnClickOnPromotionPage,
}) => {
  const isPromotionDetailsPage = useIsPromotionDetailsPage();
  const isPromotionsPage = useIsPromotionsPage();
  const promotions = usePromotionsStore(selectPromotions);
  const isOnePromotion = promotions.length === 1;
  const isDefaultLink = !isPromotionDetailsPage && !isPromotionsPage;
  const registerTargetPromotionCodeLink = useRegisterTargetPromotionCodeLink();
  const registerOnePromotionCodeLink = useRegisterOnePromotionCodeLink();
  const regCodeElementTitle = 'Зареєструвати код';

  return (
    <>
      {isPromotionDetailsPage && (
        <StyledLink to={registerTargetPromotionCodeLink}>
          {regCodeElementTitle}
        </StyledLink>
      )}
      {isPromotionsPage &&
        (isOnePromotion ? (
          <StyledLink to={registerOnePromotionCodeLink}>
            {regCodeElementTitle}
          </StyledLink>
        ) : (
          <Button type='button' onClick={onRegisterCodeBtnClickOnPromotionPage}>
            {regCodeElementTitle}
          </Button>
        ))}
      {isDefaultLink && (
        <Button type='button' onClick={onRegisterCodeBtnClickOnAllPages}>
          {regCodeElementTitle}
        </Button>
      )}
    </>
  );
};

export default RegisterCodeBtn;
