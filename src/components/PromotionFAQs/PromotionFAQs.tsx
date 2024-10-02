import { FC } from 'react';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import { Container, ContentWrap, List } from './PromotionFAQs.styled';
import PromotionFAQ from '@/components/PromotionFAQ';
import { FAQs } from '@/types/types';

const PromotionFAQs: FC = () => {
  //  TODO delete FAQs
  const faqs: FAQs = [
    {
      answer:
        'ну тут буде якась відповідь на декілька рядків, а можливо і ні. взагалі, я не розумію як це буде відбуватись. це просто жах😒😢😵🤪😵‍💫🥴😠👽',
      question:
        'Я отримав(ла) сертифікат з подарунку, але де мені його знайти і як використати?',
    },
    {
      answer:
        'ну тут буде якась відповідь на декілька рядків, а можливо і ні. взагалі, я не розумію як це буде відбуватись. це просто жах😒😢😵🤪😵‍💫🥴😠👽',
      question:
        'Я не зберіг(ла) посилання на сертифікат, де мені тепер його знайти?',
    },
    {
      answer:
        'ну тут буде якась відповідь на декілька рядків, а можливо і ні. взагалі, я не розумію як це буде відбуватись. це просто жах😒😢😵🤪😵‍💫🥴😠👽',
      question: 'Як дізнатись про переможців фінального розіграшу?',
    },
    {
      answer:
        'ну тут буде якась відповідь на декілька рядків, а можливо і ні. взагалі, я не розумію як це буде відбуватись. це просто жах😒😢😵🤪😵‍💫🥴😠👽',
      question: 'Я можу використати сертифікат у всіх магазинах мережі АТБ ?',
    },
  ];

  return (
    <Container>
      <PromotionSectionTitle title='Питання та відповіді' />
      <ContentWrap>
        <List>
          {faqs.map((faq) => (
            <PromotionFAQ faq={faq} key={faq.question} />
          ))}
        </List>
      </ContentWrap>
    </Container>
  );
};

export default PromotionFAQs;
