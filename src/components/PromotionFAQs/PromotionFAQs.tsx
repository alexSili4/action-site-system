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
import { useTargetPromotion } from '@/hooks';

const PromotionFAQs: FC<IProps> = ({ faqs }) => {
  const { hot_line_phone: hotLinePhone, hot_line_text: hotLineText } =
    useTargetPromotion() ?? {};

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
          <Title>{hotLineText}</Title>
          <WorkingHours>Lorem ipsum dolor sit amet.</WorkingHours>
          <PhoneLink href={`tel:${hotLinePhone}`}>
            <FaPhoneAlt size={theme.iconSizes.phoneLink} />
            <PhoneLinkTitle>{hotLinePhone}</PhoneLinkTitle>
          </PhoneLink>
        </AdditionalIfoWrap>
      </ContentWrap>
    </Container>
  );
};

export default PromotionFAQs;
