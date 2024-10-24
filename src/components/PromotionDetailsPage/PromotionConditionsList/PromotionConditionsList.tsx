import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import {
  Container,
  RulesCard,
  RulesLink,
  RulesLinkTitle,
  ListItem,
  List,
} from './PromotionConditionsList.styled';
import { theme } from '@/constants';
import { IProps } from './PromotionConditionsList.types';
// import PromotionConditionsListAnimation from '@PromotionDetailsPageComponents/PromotionConditionsListAnimation';
import { useTargetPromotionData } from '@/hooks';
import { IoDocumentOutline } from 'react-icons/io5';
import { getFileUrl } from '@/utils';
import rulesCardBg from '@/images/conditions/rules-bg.jpg';

const PromotionConditionsList: FC<IProps> = () => {
  const { rulesPdf } = useTargetPromotionData();
  const rulesPdfUrl = getFileUrl(rulesPdf);

  return (
    <Container>
      <List>
        {/* {conditions.map(
          (
            { title, gift_num: giftNum, img_source_json: imgSourceJson },
            idx
          ) => {
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
        )} */}
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
      </List>
    </Container>
  );
};

export default PromotionConditionsList;
