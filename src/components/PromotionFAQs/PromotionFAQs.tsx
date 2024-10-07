import { FC } from 'react';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import {
  AdditionalIfoWrap,
  Container,
  ContentWrap,
  List,
  PhoneLink,
  PhoneLinkTitle,
  Title,
  WorkingHours,
} from './PromotionFAQs.styled';
import PromotionFAQ from '@/components/PromotionFAQ';
import { FAQs } from '@/types/types';
import { FaPhoneAlt } from 'react-icons/fa';
import { PromotionDetailsPageSections, theme } from '@/constants';

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
    <Container id={PromotionDetailsPageSections.faqs}>
      <PromotionSectionTitle title='Питання та відповіді' />
      <ContentWrap>
        <List>
          {faqs.map((faq) => (
            <PromotionFAQ faq={faq} key={faq.question} />
          ))}
        </List>
        <AdditionalIfoWrap>
          <Title>
            текст, який описує як отримати додаткову інформацію про
            обслуговування на декілька рядків
          </Title>
          <WorkingHours>
            а тут буде вказано графік роботи гарячої лінії
          </WorkingHours>
          <PhoneLink href='tel:+0000000000'>
            <FaPhoneAlt size={theme.iconSizes.phoneLink} />
            <PhoneLinkTitle>0000000000</PhoneLinkTitle>
          </PhoneLink>
        </AdditionalIfoWrap>
      </ContentWrap>
    </Container>
  );
};

export default PromotionFAQs;
