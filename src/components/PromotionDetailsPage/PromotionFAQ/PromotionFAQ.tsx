import { FC, useRef, useState } from 'react';
import { IProps } from './PromotionFAQ.types';
import {
  AnswerWrap,
  ListItem,
  QuestionBtn,
  QuestionBtnTitle,
  QuestionWrap,
  Answer,
} from './PromotionFAQ.styled';
import { BtnClickEvent, DivRef } from '@/types/types';
import { makeBlur } from '@/utils';
import OpenContentBtnLabel from '@/components/OpenContentBtnLabel';

const PromotionFAQ: FC<IProps> = ({ faq: { text, title } }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const answerRef = useRef<DivRef>(null);
  const scrollHeight = answerRef.current?.scrollHeight ?? 0;

  const toggleSetShowAnswer = () => {
    setShowAnswer((prevState) => !prevState);
  };

  const onQuestionBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleSetShowAnswer();
  };

  return (
    <ListItem>
      <QuestionWrap>
        <QuestionBtn onClick={onQuestionBtnClick}>
          <QuestionBtnTitle>{title}</QuestionBtnTitle>
          <OpenContentBtnLabel showContent={showAnswer} />
        </QuestionBtn>
        <AnswerWrap
          scrollHeight={scrollHeight}
          showAnswer={showAnswer}
          ref={answerRef}
        >
          <Answer>{text}</Answer>
        </AnswerWrap>
      </QuestionWrap>
    </ListItem>
  );
};

export default PromotionFAQ;
