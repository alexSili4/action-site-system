import { FC } from 'react';
import { Container, Section } from '@/components/General';
import { RegisterCode } from '@/components/RegisterCodePage';

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
