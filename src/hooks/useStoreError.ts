import { useEffect, useState } from 'react';
import useServiceUnavailablePageNavigate from './useServiceUnavailablePageNavigate';
import { selectError as selectAuthError } from '@/store/auth/selectors';
import { selectError as selectUnusedUserCodesError } from '@/store/unusedUserCodes/selectors';
import {
  useAuthStore,
  useCitiesStore,
  usePromotionsStore,
  useUnusedUserCodesStore,
  useUserCodesStore,
  useUserPrizesStore,
} from '@/store/store';
import { selectError as selectUserPrizesError } from '@/store/userPrizes/selectors';
import { selectError as selectUserCodesError } from '@/store/userCodes/selectors';
import { selectError as selectCitiesError } from '@/store/cities/selectors';
import { selectError as selectPromotionsError } from '@/store/promotions/selectors';
import appService from '@/services/app.service';
import useIsErrorPage from './useIsErrorPage';

const useStoreError = (): void => {
  const authError = useAuthStore(selectAuthError);
  const unusedUserCodesError = useUnusedUserCodesStore(
    selectUnusedUserCodesError
  );
  const userCodesError = useUserCodesStore(selectUserCodesError);
  const userPrizesError = useUserPrizesStore(selectUserPrizesError);
  const citiesError = useCitiesStore(selectCitiesError);
  const promotionsError = usePromotionsStore(selectPromotionsError);
  const [isMaintenanceModeError, setIsMaintenanceModeError] =
    useState<boolean>(false);
  const isErrorPage = useIsErrorPage();

  useEffect(() => {
    const getIsMaintenanceMode = async (): Promise<void> => {
      try {
        await appService.getIsMaintenanceMode();

        setIsMaintenanceModeError(false);
      } catch (error) {
        setIsMaintenanceModeError(true);
      }
    };

    getIsMaintenanceMode();
  }, []);

  const navigate = useServiceUnavailablePageNavigate();

  useEffect(() => {
    const isError: boolean =
      Boolean(authError) ||
      Boolean(unusedUserCodesError) ||
      Boolean(userCodesError) ||
      Boolean(userPrizesError) ||
      Boolean(citiesError) ||
      Boolean(promotionsError) ||
      isMaintenanceModeError;

    if (isError) {
      const errorMessage: string =
        authError ||
        unusedUserCodesError ||
        userCodesError ||
        userPrizesError ||
        citiesError ||
        promotionsError ||
        '';

      navigate({ isError: true, errorMessage });
    } else if (isErrorPage) {
      navigate({ isError, errorMessage: '' });
    }
  }, [
    authError,
    citiesError,
    isMaintenanceModeError,
    promotionsError,
    unusedUserCodesError,
    userCodesError,
    userPrizesError,
  ]);
};

export default useStoreError;
