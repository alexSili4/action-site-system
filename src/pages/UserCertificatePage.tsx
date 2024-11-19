import { FC, useEffect, useState } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import UserCertificate from '@UserCertificatePageComponents/UserCertificate';
import { useParams } from 'react-router-dom';
import { PagePaths } from '@/constants';
import cabinetService from '@/services/cabinet.service';
import { IPrizeCategoryUserCertificateWithDetails } from '@/types/userCertificateWithDetails.types';

const UserCertificatePage: FC = () => {
  const [certificate, setCertificate] =
    useState<IPrizeCategoryUserCertificateWithDetails | null>(null);
  const certificateId = useParams()[PagePaths.dynamicParam] ?? '';

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
