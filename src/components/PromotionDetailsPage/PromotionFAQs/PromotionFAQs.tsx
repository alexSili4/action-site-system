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
import PromotionFAQ from '@PromotionDetailsPageComponents/PromotionFAQ';
import PromotionSectionTitle from '@PromotionDetailsPageComponents/PromotionSectionTitle';
import { LuPhone } from 'react-icons/lu';
import { PromotionDetailsPageSections, theme } from '@/constants';
import { IProps } from './PromotionFAQs.types';
import { useTargetPromotionData } from '@/hooks';

const PromotionFAQs: FC<IProps> = ({ faqs }) => {
  const { hotLinePhone, hotLineText, hotLineWorkHours, hotLineOtherText } =
    useTargetPromotionData();

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
          <Title>{hotLineOtherText}</Title>
          <PhoneLink href={`tel:${hotLinePhone}`}>
            <PhoneLinkIconWrap>
              <LuPhone size={theme.iconSizes.phoneLink} />
            </PhoneLinkIconWrap>
            <PhoneLinkTitle>{hotLinePhone}</PhoneLinkTitle>
          </PhoneLink>
          <WorkingHours>
            {hotLineText} {hotLineWorkHours}
          </WorkingHours>
        </AdditionalIfoWrap>
      </ContentWrap>
    </Container>
  );
};

export default PromotionFAQs;
