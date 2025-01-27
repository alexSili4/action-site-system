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

const SentCertificateSection: FC<IProps> = ({ supportServiceText, codeId }) => {
  const [isSuccessStatus, setIsSuccessStatus] = useState<boolean>(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserData | null>(null);

  const regCodeTimeMsg = 'Ваш акційний код буде зареєстровано протягом доби.';
  const userCodesMsg =
    'Ви можете перевірити статус акційного коду та сертифікату у Вашому Особистому кабінеті.';
  const message = isSuccessStatus
    ? userCodesMsg
    : `${regCodeTimeMsg} ${userCodesMsg}`;

  const { email: userEmail = null, name: userName = null } = userData ?? {};
  const shouldShowSuccessMsg = showSuccessMsg && userName;

  const updateUserData = (data: IUserData) => {
    setUserData(data);
  };

  const toggleShowSuccessMsgState = () => {
    setShowSuccessMsg((prevState) => !prevState);
  };

  const updateIsSuccessStatus = (isSuccessStatus: boolean) => {
    setIsSuccessStatus(isSuccessStatus);
  };

  return (
    <Container>
      <ContentWrap>
        {shouldShowSuccessMsg ? (
          <SuccessRegisterCodeMsg
            supportServiceText={supportServiceText}
            userName={userName}
            message={message}
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
              updateIsSuccessStatus={updateIsSuccessStatus}
            />
          </SentCertificateFormWrap>
        )}
      </ContentWrap>
    </Container>
  );
};

export default SentCertificateSection;
