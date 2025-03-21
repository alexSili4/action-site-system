import { FC, useEffect, useState } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import UserCode from '@UserCodePageComponents/UserCode';
import { IUserCodeWithDetails } from '@/types/userCodeWithDetails.types';
import cabinetService from '@/services/cabinet.service';
import { useDynamicId } from '@/hooks';

const UserCodePage: FC = () => {
  const [code, setCode] = useState<IUserCodeWithDetails | null>(null);
  const codeId = useDynamicId();

  useEffect(() => {
    const getUserCodeDetails = async (id: string): Promise<void> => {
      const data = await cabinetService.getCodeDetails(id);

      setCode(data);
    };

    codeId && getUserCodeDetails(codeId);
  }, [codeId]);

  return (
    <Section>
      <Container>{code && <UserCode code={code} />}</Container>
    </Section>
  );
};

export default UserCodePage;
