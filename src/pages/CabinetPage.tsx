import { FC } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import Cabinet from '@CabinetPageComponents/Cabinet';
import { useCabinetPage } from '@/hooks';
import UnusedUserCodesModalWin from '@CabinetPageComponents/UnusedUserCodesModalWin';

const CabinetPage: FC = () => {
  const { showUnusedUserCodesModalWin, toggleShowUnusedUserCodesModalWin } =
    useCabinetPage();

  return (
    <>
      <Section>
        <Container>
          <Cabinet />
        </Container>
      </Section>
      <UnusedUserCodesModalWin
        showModalWin={showUnusedUserCodesModalWin}
        setModalWinState={toggleShowUnusedUserCodesModalWin}
      />
    </>
  );
};

export default CabinetPage;
