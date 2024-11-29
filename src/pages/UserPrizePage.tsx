import { FC, useEffect, useState } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import UserPrize from '@UserPrizePageComponents/UserPrize';
import cabinetService from '@/services/cabinet.service';
import { IUserPrizeWithDetails } from '@/types/userPrizeWithDetails.types';
import { useDynamicId } from '@/hooks';

const UserPrizePage: FC = () => {
  const [prize, setPrize] = useState<IUserPrizeWithDetails | null>(null);
  const prizeId = useDynamicId();

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
