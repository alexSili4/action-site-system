import { FC } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import RegisterCode from '@RegisterCodePageComponents/RegisterCode';

const RegisterCodePage: FC = () => {
  return (
    <Section>
      <Container>
        <RegisterCode />
      </Container>
    </Section>
  );
};

export default RegisterCodePage;
