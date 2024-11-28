import { FC } from 'react';
import { IProps } from './UserPrize.types';
import { DateFormats } from '@/constants';
import { formatDate, getFileUrl, getPromotionDetailsPath } from '@/utils';
// components
import UserPrizeBanner from '@UserPrizePageComponents/UserPrizeBanner';
import UserPrizeDetails from '@UserPrizePageComponents/UserPrizeDetails';
import UserStatisticsDetailsContainer from '@CabinetPageComponents/UserStatisticsDetailsContainer';

const UserPrize: FC<IProps> = ({ prize: { code: userCode, gift, action } }) => {
  const {
    name: prizeName,
    partner,
    get_conditions: getConditions,
    images,
  } = gift;
  const { code, created_at: createdAt } = userCode;
  const { logo: partnerLogo, name: partnerName } = partner;
  const {
    hot_line_phone: hotLinePhone,
    name: promotionName,
    hot_line_work_hours: hotLineWorkHours,
    id: actionId,
  } = action;

  const promotionDetailsPath = getPromotionDetailsPath(actionId);
  const createdAtNumber = createdAt * 1000;
  const createdAtDate = formatDate({
    date: createdAtNumber,
    dateFormat: DateFormats.winnersDate,
  });

  const partnerLgoUrl = getFileUrl(partnerLogo);
  const image = images[0]?.image ?? '';
  const prizeImgUrl = getFileUrl(image);

  return (
    <UserStatisticsDetailsContainer>
      <UserPrizeBanner prizeImg={prizeImgUrl} prizeName={prizeName} />
      <UserPrizeDetails
        code={code}
        createdAtDate={createdAtDate}
        conditions={getConditions}
        partnerLogo={partnerLgoUrl}
        partnerName={partnerName}
        prizeName={prizeName}
        hotLinePhone={hotLinePhone}
        promotionName={promotionName}
        hotLineWorkHours={hotLineWorkHours}
        promotionDetailsPath={promotionDetailsPath}
      />
    </UserStatisticsDetailsContainer>
  );
};

export default UserPrize;
