import { FC, useEffect } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import Cabinet from '@CabinetPageComponents/Cabinet';
import { useUserCodesStore } from '@/store/store';
import { selectGetUserCodes } from '@/store/userCodes/selectors';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys } from '@/constants';

const CabinetPage: FC = () => {
  const getUserCodes = useUserCodesStore(selectGetUserCodes);
  const { searchParams } = useSetSearchParams();
  const page = searchParams.get(SearchParamsKeys.page) ?? '1';

  useEffect(() => {
    const pageNumber = Number(page);

    getUserCodes(pageNumber);
  }, [getUserCodes, page]);

  return (
    <Section>
      <Container>
        <Cabinet />
      </Container>
    </Section>
  );
};

export default CabinetPage;
