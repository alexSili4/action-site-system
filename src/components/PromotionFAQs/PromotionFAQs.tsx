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
import { FaPhoneAlt } from 'react-icons/fa';
import { PromotionDetailsPageSections, theme } from '@/constants';
import { IProps } from './PromotionFAQs.types';

const PromotionFAQs: FC<IProps> = ({ faqs }) => {
  return (
    <Container id={PromotionDetailsPageSections.faqs}>
      <PromotionSectionTitle title='Питання та відповіді' />
      <ContentWrap>
        <List>
          {faqs.map((faq) => (
            <PromotionFAQ faq={faq} key={faq.title} />
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
