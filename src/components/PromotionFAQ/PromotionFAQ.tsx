import { FC, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { theme } from '@/constants';
import { IProps } from './PromotionFAQ.types';
import {
  AnswerWrap,
  ListItem,
  QuestionBtn,
  QuestionBtnTitle,
  QuestionWrap,
  Answer,
} from './PromotionFAQ.styled';

const PromotionFAQ: FC<IProps> = ({ faq: { answer, question } }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const answerRef = useRef<HTMLDivElement | null>(null);
  const scrollHeight = answerRef.current?.scrollHeight ?? 0;

  const toggleSetShowAnswer = () => {
    setShowAnswer((prevState) => !prevState);
  };

  return (
    <ListItem>
      <QuestionWrap>
        <QuestionBtn onClick={toggleSetShowAnswer}>
          <QuestionBtnTitle>{question}</QuestionBtnTitle>
          <FaChevronDown size={theme.iconSizes.faqBtn} />
        </QuestionBtn>
        <AnswerWrap
          scrollHeight={scrollHeight}
          showAnswer={showAnswer}
          ref={answerRef}
        >
          <Answer>{answer}</Answer>
        </AnswerWrap>
      </QuestionWrap>
    </ListItem>
  );
};

export default PromotionFAQ;
