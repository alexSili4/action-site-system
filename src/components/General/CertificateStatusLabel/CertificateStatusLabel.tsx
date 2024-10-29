import { theme } from '@/constants';
import { FC } from 'react';
import { MdError, MdWatchLater, MdCheckCircle } from 'react-icons/md';
import { IProps } from './CertificateStatusLabel.types';
import { Container } from './CertificateStatusLabel.styled';

const CertificateStatusLabel: FC<IProps> = ({
  isErrorStatus,
  isSuccessStatus,
}) => {
  return (
    <Container isErrorStatus={isErrorStatus} isSuccessStatus={isSuccessStatus}>
      {isErrorStatus ? (
        <MdError size={theme.iconSizes.certificateStatus} />
      ) : isSuccessStatus ? (
        <MdCheckCircle size={theme.iconSizes.certificateStatus} />
      ) : (
        <MdWatchLater size={theme.iconSizes.certificateStatus} />
      )}
    </Container>
  );
};

export default CertificateStatusLabel;
