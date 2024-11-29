import { FC } from 'react';
import {
  AdditionalIfoWrap,
  Container,
  ContentWrap,
  List,
  PhoneLink,
  PhoneLinkIconWrap,
  PhoneLinkTitle,
  AdditionalIfoText,
} from './PromotionFAQs.styled';
import { LuPhone } from 'react-icons/lu';
import { PromotionDetailsPageSections, theme } from '@/constants';
import { IProps } from './PromotionFAQs.types';
// components
import PromotionFAQ from '@PromotionDetailsPageComponents/PromotionFAQ';
import PromotionSectionTitle from '@PromotionDetailsPageComponents/PromotionSectionTitle';

const PromotionFAQs: FC<IProps> = ({
  faqs,
  hotLineOtherText,
  hotLinePhone,
  hotLineWorkHours,
  hotLineText,
  validHotLinePhone,
}) => {
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
          <AdditionalIfoText>{hotLineOtherText}</AdditionalIfoText>
          <PhoneLink href={`tel:${validHotLinePhone}`}>
            <PhoneLinkIconWrap>
              <LuPhone size={theme.iconSizes.phoneLink} />
            </PhoneLinkIconWrap>
            <PhoneLinkTitle>{hotLinePhone}</PhoneLinkTitle>
          </PhoneLink>
          <AdditionalIfoText>
            {hotLineText} {hotLineWorkHours}
          </AdditionalIfoText>
        </AdditionalIfoWrap>
      </ContentWrap>
    </Container>
  );
};

export default PromotionFAQs;
