import { FC, useEffect, useState } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import UserPrize from '@UserPrizePageComponents/UserPrize';
import { useParams } from 'react-router-dom';
import cabinetService from '@/services/cabinet.service';
import { PagePaths } from '@/constants';
import { IUserPrizeWithDetails } from '@/types/userPrizeWithDetails.types';

const UserPrizePage: FC = () => {
  const [prize, setPrize] = useState<IUserPrizeWithDetails | null>(null);
  const prizeId = useParams()[PagePaths.dynamicParam] ?? '';

  useEffect(() => {
    const getUserPrizeDetails = async (id: string): Promise<void> => {
      const data = await cabinetService.getPrizeDetails(id);

      setPrize(data);
    };

    prizeId && getUserPrizeDetails(prizeId);
  }, [prizeId]);

  return (
    <Section>
      <Container>{prize && <UserPrize prize={prize} />}</Container>
    </Section>
  );
};

export default UserPrizePage;
