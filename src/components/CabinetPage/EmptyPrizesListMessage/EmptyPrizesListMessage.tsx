import { FC } from 'react';
import { Container, Title, Button } from './EmptyPrizesListMessage.styled';
import { ICabinetPageOutletContext } from '@/types/types';
import { useOutletContext } from 'react-router-dom';
import { IProps } from './EmptyPrizesListMessage.types';

const EmptyPrizesListMessage: FC<IProps> = ({
  title,
  bgImg,
  isBigImgSize = false,
}) => {
  const { onEmptyPrizesListBtnClick }: ICabinetPageOutletContext =
    useOutletContext();

  return (
    <Container bgImg={bgImg} isBigImgSize={isBigImgSize}>
      <Title>{title}</Title>
      <Button type='button' onClick={onEmptyPrizesListBtnClick}>
        До акцій вашого міста
      </Button>
    </Container>
  );
};

export default EmptyPrizesListMessage;
