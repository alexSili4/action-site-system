import { FC } from 'react';
import { IProps } from './UserCodeDetailsMainInfo.types';
import NavArrow from '@/icons/userCertificate/navArrow.svg?react';
import { usePromotionDetailsState } from '@/hooks';
import {
  CodeDetailsItem,
  CodeDetailsSubtitle,
  CodeDetailsText,
  CodeDetailsTextWrap,
  CodeDetailsWrap,
  MainInfo,
  PrizeDrawingDateText,
  PrizeDrawingDateTitle,
  PrizeDrawingDateWrap,
  StyledLink,
  TargetShop,
  TargetShopAddress,
  TargetShopTitle,
  TargetShopWrap,
  MarksMessageWrap,
} from './UserCodeDetailsMainInfo.styled';
import UserStatisticsDetailsDelimiter from '@CabinetPageComponents/UserStatisticsDetailsDelimiter';
import StatisticsCodeMarksMessage from '@GeneralComponents/StatisticsCodeMarksMessage';
import { getIsPromotionWheelType } from '@/utils';

const UserCodeDetailsMainInfo: FC<IProps> = ({
  marks,
  promotionDetailsPath,
  actionName,
  codeCreatedAtDate,
  receiptNumber,
  drawDate,
  shopAddress,
  actionType,
}) => {
  const promotionDetailsState = usePromotionDetailsState();
  const isPromotionWheelType = getIsPromotionWheelType(actionType);
  const isMarks = marks !== null && !isPromotionWheelType;

  return (
    <MainInfo>
      <CodeDetailsWrap>
        <CodeDetailsItem maxWidth={215}>
          <CodeDetailsSubtitle isAutoWidth>Акція:</CodeDetailsSubtitle>
          <StyledLink to={promotionDetailsPath} state={promotionDetailsState}>
            <CodeDetailsText>{actionName}</CodeDetailsText>
            <NavArrow />
          </StyledLink>
        </CodeDetailsItem>
        <UserStatisticsDetailsDelimiter></UserStatisticsDetailsDelimiter>
        <CodeDetailsItem maxWidth={105}>
          <CodeDetailsSubtitle>Дата активації:</CodeDetailsSubtitle>
          <CodeDetailsText>{codeCreatedAtDate}</CodeDetailsText>
        </CodeDetailsItem>
        <UserStatisticsDetailsDelimiter></UserStatisticsDetailsDelimiter>
        <CodeDetailsItem isHiddenOnDesk>
          <CodeDetailsSubtitle>№ чеку з кодом:</CodeDetailsSubtitle>
          <CodeDetailsText>{receiptNumber}</CodeDetailsText>
        </CodeDetailsItem>
        {!isPromotionWheelType && (
          <CodeDetailsItem isHiddenOnDesk>
            <CodeDetailsSubtitle>Дата розіграшу призів:</CodeDetailsSubtitle>
            <CodeDetailsText>{drawDate}</CodeDetailsText>
          </CodeDetailsItem>
        )}
        <CodeDetailsItem isHiddenOnMobile>
          <CodeDetailsSubtitle>Магазин де отримано:</CodeDetailsSubtitle>
          <CodeDetailsTextWrap>
            <CodeDetailsText>{shopAddress}</CodeDetailsText>
          </CodeDetailsTextWrap>
        </CodeDetailsItem>
      </CodeDetailsWrap>
      <TargetShopWrap>
        <TargetShopTitle>Магазин де отримано:</TargetShopTitle>
        <TargetShop>
          <TargetShopAddress>{shopAddress}</TargetShopAddress>
        </TargetShop>
      </TargetShopWrap>
      <CodeDetailsWrap>
        {!isPromotionWheelType && (
          <PrizeDrawingDateWrap>
            <PrizeDrawingDateTitle>
              Дата розіграшу призів:
            </PrizeDrawingDateTitle>
            <PrizeDrawingDateText>{drawDate}</PrizeDrawingDateText>
          </PrizeDrawingDateWrap>
        )}
        {isMarks && (
          <MarksMessageWrap>
            <UserStatisticsDetailsDelimiter></UserStatisticsDetailsDelimiter>
            <StatisticsCodeMarksMessage
              marks={marks}
              mobSize={50}
              deskSize={50}
              isCodeDetailsPage
            />
          </MarksMessageWrap>
        )}
      </CodeDetailsWrap>
    </MainInfo>
  );
};

export default UserCodeDetailsMainInfo;
