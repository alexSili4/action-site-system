import { FC } from 'react';
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
import {
  PromotionFAQ,
  PromotionSectionTitle,
} from '@/components/PromotionDetailsPage';
import { LuPhone } from 'react-icons/lu';
import { PromotionDetailsPageSections, theme } from '@/constants';
import { IProps } from './PromotionFAQs.types';
import { useTargetPromotionData } from '@/hooks';

const PromotionFAQs: FC<IProps> = ({ faqs }) => {
  const { hotLinePhone, hotLineText } = useTargetPromotionData();

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
