import { FC } from 'react';
import {
  Container,
  Image,
  ImgText,
  ImgWrap,
  CodeDetailsText,
  RegisterCodeText,
  StatisticsCodeText,
} from './StatisticsCodeMarksMessage.styled';
import { IProps } from './StatisticsCodeMarksMessage.types';
import { getMarksData } from '@/utils';

const StatisticsCodeMarksMessage: FC<IProps> = ({
  marks,
  mobSize,
  deskSize,
  isCabinetPage = false,
  isCodeDetailsPage = false,
  isRegisterCodePage = false,
}) => {
  const marksData = getMarksData(marks);
  const textDelimiter = isCabinetPage ? '<br />' : ' ';
  const text = `Шанс на
        ${textDelimiter}
        виграш:`;
  const textComponent = isRegisterCodePage ? (
    <RegisterCodeText
      dangerouslySetInnerHTML={{ __html: text }}
    ></RegisterCodeText>
  ) : isCodeDetailsPage ? (
    <CodeDetailsText
      dangerouslySetInnerHTML={{ __html: text }}
    ></CodeDetailsText>
  ) : isCabinetPage ? (
    <StatisticsCodeText
      dangerouslySetInnerHTML={{ __html: text }}
    ></StatisticsCodeText>
  ) : (
    <></>
  );

  return (
    marksData && (
      <Container
        isCodeDetailsPage={isCodeDetailsPage}
        isRegisterCodePage={isRegisterCodePage}
      >
        {textComponent}
        <ImgWrap>
          <Image
            src={marksData.img}
            alt='Декоративне зображення монетки'
            mobSize={mobSize}
            deskSize={deskSize}
          />
          <ImgText>x{marks}</ImgText>
        </ImgWrap>
      </Container>
    )
  );
};

export default StatisticsCodeMarksMessage;
