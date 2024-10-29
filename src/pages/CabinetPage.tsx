import { FC, useEffect } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import Cabinet from '@CabinetPageComponents/Cabinet';
import { useUserCodesStore } from '@/store/store';
import { selectGetUserCodes } from '@/store/userCodes/selectors';

const CabinetPage: FC = () => {
  const getUserCodes = useUserCodesStore(selectGetUserCodes);

  useEffect(() => {
    getUserCodes();
  }, [getUserCodes]);

  return (
    <Section>
      <Container>
        <Cabinet />
      </Container>
    </Section>
  );
};

export default CabinetPage;
