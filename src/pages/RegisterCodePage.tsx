import { FC } from 'react';
import Section from '@GeneralComponents/Section';
import RegisterCode from '@RegisterCodePageComponents/RegisterCode';
import { usePromotion } from '@/hooks';

const RegisterCodePage: FC = () => {
  const promotion = usePromotion();

  return (
    <Section>{promotion && <RegisterCode promotion={promotion} />}</Section>
  );
};

export default RegisterCodePage;
