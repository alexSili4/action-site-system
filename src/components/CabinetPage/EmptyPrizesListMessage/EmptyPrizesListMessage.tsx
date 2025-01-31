import { FC } from 'react';
import { Container, Title, StyledLink } from './EmptyPrizesListMessage.styled';
import { IProps } from './EmptyPrizesListMessage.types';
import { PagePaths } from '@/constants';

const EmptyPrizesListMessage: FC<IProps> = ({
  title,
  bgImg,
  isBigImgSize = false,
}) => {
  return (
    <Container bgImg={bgImg} isBigImgSize={isBigImgSize}>
      <Title>{title}</Title>
      <StyledLink to={PagePaths.root}>На головну</StyledLink>
    </Container>
  );
};

export default EmptyPrizesListMessage;
