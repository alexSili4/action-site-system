import { FC } from 'react';
import {
  Container,
  List,
  ListItem,
} from './StatisticsCodesCategoryContent.styled';
import StatisticsCode from '@CabinetPageComponents/StatisticsCode';
import { useUserCodesStore } from '@/store/store';
import { selectUserCodes, selectTotalPages } from '@/store/userCodes/selectors';
import { formatDate, getFileUrl } from '@/utils';
import { DateFormats, Messages } from '@/constants';
import PaginationBar from '@GeneralComponents/PaginationBar';
import EmptyPrizesListMessage from '@CabinetPageComponents/EmptyPrizesListMessage';
import receipts from '@/images/cabinet/receipts.png';

const StatisticsCodesCategoryContent: FC = () => {
  const userCodes = useUserCodesStore(selectUserCodes);
  const totalPages = useUserCodesStore(selectTotalPages);
  const isManyPages = totalPages > 1;
  const isCodesLength = Boolean(userCodes.length);
  const shouldShowPaginationBar = isCodesLength && isManyPages;
  const isUserCodesList = Boolean(userCodes.length);

  return (
    <Container>
      {isUserCodesList ? (
        <>
          <List>
            {userCodes.map(
              ({
                code,
                code_created_at: codeCreatedAt,
                code_status: codeStatus,
                present_gift_partner_logo: partnerLogo,
                wheel_certificate_id: wheelCertificateId,
                present_gift_id: presentGiftId,
              }) => {
                const partnerLogoUrl = getFileUrl(partnerLogo ?? '');
                const isErrorStatus = codeStatus === 2;
                const isSuccessStatus = codeStatus === 1;
                const codeCreatedAtDate = formatDate({
                  date: codeCreatedAt * 1000,
                  dateFormat: DateFormats.generalDate,
                });
                const shouldShowUserCertificateLink =
                  typeof wheelCertificateId === 'number';
                const shouldShowUserPrizeLink =
                  typeof presentGiftId === 'number';
                const shouldShowCertificate = codeStatus === 1;

                return (
                  <ListItem key={code}>
                    <StatisticsCode
                      code={code}
                      codeCreatedAt={codeCreatedAtDate}
                      isErrorStatus={isErrorStatus}
                      isSuccessStatus={isSuccessStatus}
                      partnerLogo={partnerLogoUrl}
                      shouldShowUserCertificateLink={
                        shouldShowUserCertificateLink
                      }
                      shouldShowUserPrizeLink={shouldShowUserPrizeLink}
                      shouldShowCertificate={shouldShowCertificate}
                    />
                  </ListItem>
                );
              }
            )}
          </List>
          {shouldShowPaginationBar && <PaginationBar totalPages={totalPages} />}
        </>
      ) : (
        <EmptyPrizesListMessage
          title={Messages.emptyUserCodesList}
          bgImg={receipts}
        />
      )}
    </Container>
  );
};

export default StatisticsCodesCategoryContent;
