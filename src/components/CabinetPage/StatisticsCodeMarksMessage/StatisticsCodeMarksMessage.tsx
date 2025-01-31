import { FC } from 'react';
import {
  Container,
  Image,
  ImgText,
  ImgWrap,
  Text,
} from './StatisticsCodeMarksMessage.styled';
import { IProps } from './StatisticsCodeMarksMessage.types';
import { getMarksData } from '@/utils';

const StatisticsCodeMarksMessage: FC<IProps> = ({
  marks,
  isCodeDetails = false,
}) => {
  const marksData = getMarksData(marks);

  return (
    // TODO fix
    marksData && (
      <Container isCodeDetails={isCodeDetails}>
        <Text isCodeDetails={isCodeDetails}>
          Шанс на
          {isCodeDetails ? ' ' : <br />}
          виграш:
        </Text>
        <ImgWrap>
          <Image
            src={marksData.img}
            alt='Декоративне зображення монетки'
            isCodeDetails={isCodeDetails}
          />
          <ImgText>x{marks}</ImgText>
        </ImgWrap>
      </Container>
    )
  );
};

export default StatisticsCodeMarksMessage;
