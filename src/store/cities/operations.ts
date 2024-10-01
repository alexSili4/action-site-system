import citiesService from '@/services/cities.service';
import operationWrapper from '@/store/cities/operationWrapper';
import { Cities } from '@/types/city.types';
import { IGetCitiesOperationProps } from '@/types/citiesStore.types';

const getCitiesOperation = async ({
  set,
}: IGetCitiesOperationProps): Promise<Cities | undefined> => {
  const response = await citiesService.getCities();
  set({
    items: response,
    isLoaded: true,
  });
  return response;
};

export const getCities = operationWrapper(getCitiesOperation);
