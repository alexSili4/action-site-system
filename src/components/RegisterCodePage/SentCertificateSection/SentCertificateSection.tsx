import { FC, useState } from 'react';
import {
  Container,
  ContentWrap,
  SentCertificateFormWrap,
} from './SentCertificateSection.styled';
import { IProps } from './SentCertificateSection.types';
// components
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';
import SentCertificateForm from '@RegisterCodePageComponents/SentCertificateForm';
import SuccessRegisterCodeMsg from '@RegisterCodePageComponents/SuccessRegisterCodeMsg';
import { IUserData } from '@/types/code.types';

const SentCertificateSection: FC<IProps> = ({
  hotLinePhone,
  hotLineWorkHours,
  codeId,
}) => {
  const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserData | null>(null);

  const { email: userEmail = null, name: userName = null } = userData ?? {};
  const shouldShowSuccessMsg = showSuccessMsg && userName;

  const updateUserData = (data: IUserData) => {
    setUserData(data);
  };

  const toggleShowSuccessMsgState = () => {
    setShowSuccessMsg((prevState) => !prevState);
  };

  return (
    <Container>
      <ContentWrap>
        {shouldShowSuccessMsg ? (
          <SuccessRegisterCodeMsg
            hotLinePhone={hotLinePhone}
            hotLineWorkHours={hotLineWorkHours}
            userName={userName}
          />
        ) : (
          <SentCertificateFormWrap>
            <RegisterCodeStepsBar />
            <SentCertificateForm
              userName={userName}
              userEmail={userEmail}
              updateUserData={updateUserData}
              toggleShowSuccessMsgState={toggleShowSuccessMsgState}
              codeId={codeId}
            />
          </SentCertificateFormWrap>
        )}
      </ContentWrap>
    </Container>
  );
};

export default SentCertificateSection;
