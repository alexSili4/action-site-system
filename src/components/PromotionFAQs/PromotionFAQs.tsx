import { FC } from 'react';
import PromotionSectionTitle from '@/components/PromotionSectionTitle';
import {
  AdditionalIfoWrap,
  Container,
  ContentWrap,
  List,
  PhoneLink,
  PhoneLinkIconWrap,
  PhoneLinkTitle,
  Title,
  WorkingHours,
} from './PromotionFAQs.styled';
import PromotionFAQ from '@/components/PromotionFAQ';
import { LuPhone } from 'react-icons/lu';
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
          <Title>
            Потрібна додаткова інформація? Ви можете зв&#8217;язатися по
            телефону звернувшись в Центр Обслуговування Кліентів
          </Title>
          <WorkingHours>{hotLineText}</WorkingHours>
          <PhoneLink href={`tel:${hotLinePhone}`}>
            <PhoneLinkIconWrap>
              <LuPhone size={theme.iconSizes.phoneLink} />
            </PhoneLinkIconWrap>
            <PhoneLinkTitle>{hotLinePhone}</PhoneLinkTitle>
          </PhoneLink>
        </AdditionalIfoWrap>
      </ContentWrap>
    </Container>
  );
};

export default PromotionFAQs;
