import { useEffect, useState } from 'react';
import { useSetSearchParams } from '@/hooks';
import { useCitiesStore } from '@/store/store';
import { selectGetCities, selectCities } from '@/store/cities/selectors';
import { SearchParamsKeys } from '@/constants';
import { makeBlur, getShowLocationsBtnTitle } from '@/utils';
import { AnchorClickEvent, BtnClickEvent } from '@/types/types';
import { IUseLocationFilter } from '@/types/hooks.types';

const useLocationFilter = (): IUseLocationFilter => {
  const getCities = useCitiesStore(selectGetCities);
  const cities = useCitiesStore(selectCities);
  const { updateSearchParams, searchParams } = useSetSearchParams();
  const cityId = searchParams.get(SearchParamsKeys.cityId) ?? '';
  const [showLocationList, setShowLocationList] = useState<boolean>(false);
  const { showLocationsBtnTitle, isSelectedCity } = getShowLocationsBtnTitle({
    cities,
    cityId: Number(cityId),
  });

  useEffect(() => {
    if (!cities.length) {
      getCities();
    }
  }, [cities, getCities]);

  const toggleShowLocationList = () => {
    setShowLocationList((prevState) => !prevState);
  };

  const onShowListBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    updateSearchParams({ key: SearchParamsKeys.search, value: '' });
    toggleShowLocationList();
  };

  const onLocationLinkClick = (e: AnchorClickEvent) => {
    makeBlur(e.currentTarget);

    toggleShowLocationList();
  };

  return {
    onShowListBtnClick,
    showLocationList,
    isSelectedCity,
    showLocationsBtnTitle,
    onLocationLinkClick,
    toggleShowLocationList,
  };
};

export default useLocationFilter;
