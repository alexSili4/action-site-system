import { FC } from 'react';
import { LinkWrap, LinkTitle } from './RegisterCodeLink.styled';
import { IProps } from './RegisterCodeLink.types';
import { IoDocumentOutline } from 'react-icons/io5';
import { theme } from '@/constants';
import { Link } from 'react-router-dom';

const RegisterCodeLink: FC<IProps> = ({ to, isHiddenOnMobile = false }) => {
  return (
    <LinkWrap isHiddenOnMobile={isHiddenOnMobile}>
      <Link to={to}>
        <LinkTitle>Зареєструвати код</LinkTitle>
        <IoDocumentOutline size={theme.iconSizes.regCodeLink} />
      </Link>
    </LinkWrap>
  );
};

export default RegisterCodeLink;
