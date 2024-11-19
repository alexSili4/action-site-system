import { PagePaths, theme } from '@/constants';
import { FC } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import {
  StyledLink,
  Container,
  IconWrap,
  Title,
} from './CabinetGoBackLink.styled';
import { IProps } from './CabinetGoBackLink.types';

const CabinetGoBackLink: FC<IProps> = ({
  isShowOnDesk = false,
  from = PagePaths.cabinet,
}) => {
  return (
    <Container isShowOnDesk={isShowOnDesk}>
      <StyledLink to={from}>
        <IconWrap>
          <FaChevronLeft size={theme.iconSizes.cabinetGoBackLink} />
        </IconWrap>
        <Title>Особистий кабінет</Title>
      </StyledLink>
    </Container>
  );
};

export default CabinetGoBackLink;
