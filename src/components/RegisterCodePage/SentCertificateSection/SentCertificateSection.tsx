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
import { IUserDataWithCode } from '@/types/code.types';

const SentCertificateSection: FC<IProps> = ({
  supportServiceText,
  codeId,
  actionType,
}) => {
  const [isSuccessStatus, setIsSuccessStatus] = useState<boolean>(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserDataWithCode | null>(null);

  const regCodeTimeMsg = 'Ваш акційний код буде зареєстровано протягом доби.';
  const userCodesMsg =
    'Ви можете перевірити статус акційного коду та сертифікату у Вашому Особистому кабінеті.';
  const message = isSuccessStatus
    ? userCodesMsg
    : `${regCodeTimeMsg} ${userCodesMsg}`;

  const {
    email: userEmail = null,
    name: userName = null,
    code,
  } = userData ?? {};
  const shouldShowSuccessMsg = showSuccessMsg && userName;
  const codeMarks = code?.marks ?? null;

  const updateUserData = (data: IUserDataWithCode) => {
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
            marks={codeMarks}
            actionType={actionType}
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
