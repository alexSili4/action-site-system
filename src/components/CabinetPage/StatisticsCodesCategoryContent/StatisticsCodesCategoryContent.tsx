import { FC } from 'react';
import { List, ListItem } from './StatisticsCodesCategoryContent.styled';
import StatisticsCode from '@CabinetPageComponents/StatisticsCode';
import { useUserCodesStore } from '@/store/store';
import { selectUserCodes } from '@/store/userCodes/selectors';
import { formatDate } from '@/utils';
import { DateFormats } from '@/constants';

const StatisticsCodesCategoryContent: FC = () => {
  const userCodes = useUserCodesStore(selectUserCodes);

  return (
    <List>
      {userCodes.map(({ code, code_created_at: codeCreatedAt }) => {
        // TODO fix statuses
        const isErrorStatus = false;
        // const isErrorStatus = true;
        // const isSuccessStatus = false;
        const isSuccessStatus = true;
        const certificateImg = '';
        const codeCreatedAtDate = formatDate({
          date: codeCreatedAt * 1000,
          dateFormat: DateFormats.generalDate,
        });

        return (
          <ListItem key={code}>
            <StatisticsCode
              code={code}
              certificateImg={certificateImg}
              codeCreatedAt={codeCreatedAtDate}
              isErrorStatus={isErrorStatus}
              isSuccessStatus={isSuccessStatus}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default StatisticsCodesCategoryContent;
