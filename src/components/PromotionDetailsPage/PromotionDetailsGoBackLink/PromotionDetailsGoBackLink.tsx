import { theme } from '@/constants';
import { FC } from 'react';
import { StyledLink } from './PromotionDetailsGoBackLink.styled';
import { IProps } from './PromotionDetailsGoBackLink.types';
import { FaChevronLeft } from 'react-icons/fa';
import GoBackLink from '@GeneralComponents/GoBackLink';

const PromotionGoBackLink: FC<IProps> = ({ from }) => {
  return (
    <GoBackLink from={from}>
      <StyledLink>
        <FaChevronLeft size={theme.iconSizes.goBackLink} />
      </StyledLink>
    </GoBackLink>
  );
};

export default PromotionGoBackLink;
