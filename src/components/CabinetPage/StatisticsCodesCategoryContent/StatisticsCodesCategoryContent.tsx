import { FC } from 'react';
import {
  Container,
  List,
  ListItem,
} from './StatisticsCodesCategoryContent.styled';
import StatisticsCode from '@CabinetPageComponents/StatisticsCode';
import { useUserCodesStore } from '@/store/store';
import { selectUserCodes } from '@/store/userCodes/selectors';
import { formatDate } from '@/utils';
import { DateFormats } from '@/constants';
import PaginationBar from '@GeneralComponents/PaginationBar';

const StatisticsCodesCategoryContent: FC = () => {
  const userCodes = useUserCodesStore(selectUserCodes);
  const shouldShowPaginationBar = Boolean(userCodes.length);

  return (
    <Container>
      <List>
        {userCodes.map(({ code, code_created_at: codeCreatedAt }) => {
          // TODO fix statuses
          const isErrorStatus = false;
          // const isErrorStatus = true;
          // const isSuccessStatus = false;
          const isSuccessStatus = true;
          const codeCreatedAtDate = formatDate({
            date: codeCreatedAt * 1000,
            dateFormat: DateFormats.generalDate,
          });

          return (
            <ListItem key={code}>
              <StatisticsCode
                code={code}
                codeCreatedAt={codeCreatedAtDate}
                isErrorStatus={isErrorStatus}
                isSuccessStatus={isSuccessStatus}
              />
            </ListItem>
          );
        })}
      </List>
      {/* TODO fix */}
      {shouldShowPaginationBar && (
        <PaginationBar group={userCodes.length} totalCount={40} />
      )}
    </Container>
  );
};

export default StatisticsCodesCategoryContent;
