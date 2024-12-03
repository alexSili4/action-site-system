import { FC, useEffect, useState } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import UserCertificate from '@UserCertificatePageComponents/UserCertificate';
import cabinetService from '@/services/cabinet.service';
import { IUserCertificateWithDetails } from '@/types/userCertificateWithDetails.types';
import { useDynamicId } from '@/hooks';

const UserCertificatePage: FC = () => {
  const [certificate, setCertificate] =
    useState<IUserCertificateWithDetails | null>(null);
  const certificateId = useDynamicId();

  useEffect(() => {
    const getUserCertificateDetails = async (id: string): Promise<void> => {
      const data = await cabinetService.getCertificateDetails(id);

      setCertificate(data);
    };

    certificateId && getUserCertificateDetails(certificateId);
  }, [certificateId]);

  return (
    <Section>
      <Container>
        {certificate && <UserCertificate certificate={certificate} />}
      </Container>
    </Section>
  );
};

export default UserCertificatePage;
