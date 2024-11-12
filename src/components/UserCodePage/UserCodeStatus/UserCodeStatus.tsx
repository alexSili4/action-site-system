import { FC } from 'react';
import { IProps } from './UserCodeStatus.types';
import { Messages, theme } from '@/constants';
import { MdCheckCircle, MdError, MdWatchLater } from 'react-icons/md';
import { Container, StatusText, StatusWrap } from './UserCodeStatus.styled';

const UserCodeStatus: FC<IProps> = ({ isErrorStatus, isSuccessStatus }) => {
  return (
    <Container isErrorStatus={isErrorStatus} isSuccessStatus={isSuccessStatus}>
      {isErrorStatus ? (
        <StatusWrap
          isErrorStatus={isErrorStatus}
          isSuccessStatus={isSuccessStatus}
        >
          <MdError size={theme.iconSizes.certificateStatus} />
          <StatusText
            isErrorStatus={isErrorStatus}
            isSuccessStatus={isSuccessStatus}
          >
            {Messages.userCodeErrorMsg}
          </StatusText>
        </StatusWrap>
      ) : isSuccessStatus ? (
        <StatusWrap
          isErrorStatus={isErrorStatus}
          isSuccessStatus={isSuccessStatus}
        >
          <MdCheckCircle size={theme.iconSizes.certificateStatus} />
          <StatusText
            isErrorStatus={isErrorStatus}
            isSuccessStatus={isSuccessStatus}
          >
            {Messages.userCodeSuccessMsg}
          </StatusText>
        </StatusWrap>
      ) : (
        <StatusWrap
          isErrorStatus={isErrorStatus}
          isSuccessStatus={isSuccessStatus}
        >
          <MdWatchLater size={theme.iconSizes.certificateStatus} />
          <StatusText
            isErrorStatus={isErrorStatus}
            isSuccessStatus={isSuccessStatus}
          >
            {Messages.userCodeDefaultMsg}
          </StatusText>
        </StatusWrap>
      )}
    </Container>
  );
};

export default UserCodeStatus;
