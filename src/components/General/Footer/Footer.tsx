import { FC } from 'react';
import { StyledFooter, Copyright } from './Footer.styled';
import { SocialLinksList } from '@/components/General';
import { IProps } from './Footer.types';

const Footer: FC<IProps> = ({ isRootPage }) => {
  return (
    <StyledFooter isRootPage={isRootPage}>
      <SocialLinksList />
      <Copyright isRootPage={isRootPage}>
        © 2010-2024 ТОВ "АТБ-Маркет". Всі права захищено.
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
