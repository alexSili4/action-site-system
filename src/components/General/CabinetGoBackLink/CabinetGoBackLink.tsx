import { PagePaths, theme } from '@/constants';
import { FC } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { StyledLink, Content, Title } from './CabinetGoBackLink.styled';

const CabinetGoBackLink: FC = () => {
  return (
    <StyledLink to={PagePaths.cabinet}>
      <Content>
        <FaArrowLeft size={theme.iconSizes.cabinetGoBackLink} />
        <Title>Особистий кабінет</Title>
      </Content>
    </StyledLink>
  );
};

export default CabinetGoBackLink;
