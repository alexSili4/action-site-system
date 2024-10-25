import { FC } from 'react';
import { IoDocumentOutline } from 'react-icons/io5';
import rulesCardBg from '@/images/conditions/rules-bg.jpg';
import { theme } from '@/constants';
import { useTargetPromotionData } from '@/hooks';
import { getFileUrl } from '@/utils';
import {
  RulesCard,
  RulesLink,
  RulesLinkTitle,
  ListItem,
  List,
  Card,
  TitleWrap,
  Title,
  Cover,
  StepLabelWrap,
  StepLabel,
} from './PromotionConditionsList.styled';
import { IProps } from './PromotionConditionsList.types';
import PromotionConditionsListAnimation from '@PromotionDetailsPageComponents/PromotionConditionsListAnimation';

const PromotionConditionsList: FC<IProps> = (({ conditions, listRef }) => {
  const { rulesPdf } = useTargetPromotionData();
  const rulesPdfUrl = getFileUrl(rulesPdf);

  return (
    <List ref={listRef}>
      {conditions.map(
        ({ title, gift_num: giftNum, img_source_json: imgSourceJson }, idx) => {
          const animationData = imgSourceJson && JSON.parse(imgSourceJson);

          return (
            <ListItem key={idx}>
              <Card>
                <TitleWrap>
                  <Title>{title}</Title>
                </TitleWrap>
                <Cover>
                  <PromotionConditionsListAnimation
                    animationData={animationData}
                  />
                  <StepLabelWrap>
                    <StepLabel>{giftNum}</StepLabel>
                  </StepLabelWrap>
                </Cover>
              </Card>
            </ListItem>
          );
        }
      )}
      <ListItem key={rulesPdfUrl}>
        <RulesCard bgImgUrl={rulesCardBg}>
          <RulesLink
            href={rulesPdfUrl}
            download
            target='_blank'
            rel='noopener noreferrer'
          >
            <RulesLinkTitle>Правила акції</RulesLinkTitle>
            <IoDocumentOutline size={theme.iconSizes.rulesLink} />
          </RulesLink>
        </RulesCard>
      </ListItem>
      {/* <ListItem key={rulesPdfUrl}>
        <RulesCard bgImgUrl={rulesCardBg}>
          <RulesLink
            href={rulesPdfUrl}
            download
            target='_blank'
            rel='noopener noreferrer'
          >
            <RulesLinkTitle>Правила акції</RulesLinkTitle>
            <IoDocumentOutline size={theme.iconSizes.rulesLink} />
          </RulesLink>
        </RulesCard>
      </ListItem>
      <ListItem key={rulesPdfUrl}>
        <RulesCard bgImgUrl={rulesCardBg}>
          <RulesLink
            href={rulesPdfUrl}
            download
            target='_blank'
            rel='noopener noreferrer'
          >
            <RulesLinkTitle>Правила акції</RulesLinkTitle>
            <IoDocumentOutline size={theme.iconSizes.rulesLink} />
          </RulesLink>
        </RulesCard>
      </ListItem>
      <ListItem key={rulesPdfUrl}>
        <RulesCard bgImgUrl={rulesCardBg}>
          <RulesLink
            href={rulesPdfUrl}
            download
            target='_blank'
            rel='noopener noreferrer'
          >
            <RulesLinkTitle>Правила акції</RulesLinkTitle>
            <IoDocumentOutline size={theme.iconSizes.rulesLink} />
          </RulesLink>
        </RulesCard>
      </ListItem>
      <ListItem key={rulesPdfUrl}>
        <RulesCard bgImgUrl={rulesCardBg}>
          <RulesLink
            href={rulesPdfUrl}
            download
            target='_blank'
            rel='noopener noreferrer'
          >
            <RulesLinkTitle>Правила акції</RulesLinkTitle>
            <IoDocumentOutline size={theme.iconSizes.rulesLink} />
          </RulesLink>
        </RulesCard>
      </ListItem>
      <ListItem key={rulesPdfUrl}>
        <RulesCard bgImgUrl={rulesCardBg}>
          <RulesLink
            href={rulesPdfUrl}
            download
            target='_blank'
            rel='noopener noreferrer'
          >
            <RulesLinkTitle>Правила акції</RulesLinkTitle>
            <IoDocumentOutline size={theme.iconSizes.rulesLink} />
          </RulesLink>
        </RulesCard>
      </ListItem> */}
    </List>
  );
});

export default PromotionConditionsList;
