import { FC, useState } from 'react';
import RegisterCodeBanner from '@RegisterCodePageComponents/RegisterCodeBanner';
import {
  Container,
  ContentWrap,
  RegisterUserFormWrap,
  SuccessRegisterUserMsgWrap,
  SuccessRegisterUserMsgTitle,
  SuccessRegisterUserMsg,
  SuccessRegisterUserMsgContainer,
  CabinetLink,
} from './RegisterUserSection.styled';
import { IProps } from './RegisterUserSection.types';
import RegisterCodeStepsBar from '@RegisterCodePageComponents/RegisterCodeStepsBar';
import RegisterUserForm from '@RegisterCodePageComponents/RegisterUserForm';
import { PagePaths } from '@/constants';

const RegisterUserSection: FC<IProps> = ({ steps, currentStep }) => {
  const [showSuccessMsg, setShowSuccessMsg] = useState<boolean>(true);

  const setShowSuccessMsgState = () => {
    setShowSuccessMsg(true);
  };

  return (
    <Container>
      <RegisterCodeBanner />
      <ContentWrap>
        {showSuccessMsg ? (
          <SuccessRegisterUserMsgContainer>
            <SuccessRegisterUserMsgWrap>
              <SuccessRegisterUserMsgTitle>
                Дякуємо, ________!
              </SuccessRegisterUserMsgTitle>
              <SuccessRegisterUserMsg>
                Ваш акційний код буде зареєстровано протягом доби. Ви можете
                перевірити статус акційного коду та сертифікату у Вашому
                Особистому кабінеті.
              </SuccessRegisterUserMsg>
            </SuccessRegisterUserMsgWrap>
            <CabinetLink to={PagePaths.cabinet}>Особистий кабінет</CabinetLink>
          </SuccessRegisterUserMsgContainer>
        ) : (
          <RegisterUserFormWrap>
            <RegisterCodeStepsBar
              isHiddenOnMobile
              steps={steps}
              currentStep={currentStep}
            />
            <RegisterUserForm setShowSuccessMsgState={setShowSuccessMsgState} />
          </RegisterUserFormWrap>
        )}
      </ContentWrap>
    </Container>
  );
};

export default RegisterUserSection;
