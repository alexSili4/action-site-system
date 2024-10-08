import { useEffect, useState } from 'react';
import { useSetSearchParams } from '@/hooks';
import { useCitiesStore } from '@/store/store';
import { selectGetCities, selectCities } from '@/store/cities/selectors';
import { SearchParamsKeys } from '@/constants';
import { makeBlur, getShowLocationsBtnTitle } from '@/utils';
import { AnchorClickEvent, BtnClickEvent } from '@/types/types';
import { IUseLocationFilter } from '@/types/hooks.types';

const useLocationFilter = (): IUseLocationFilter => {
  // store
  const getCities = useCitiesStore(selectGetCities);
  const cities = useCitiesStore(selectCities);
  // search params
  const { updateSearchParams, searchParams } = useSetSearchParams();
  const cityId = searchParams.get(SearchParamsKeys.cityId) ?? '';
  // state
  const [showLocationList, setShowLocationList] = useState<boolean>(false);
  // other
  const { showLocationsBtnTitle, isSelectedCity } = getShowLocationsBtnTitle({
    cities,
    cityId: Number(cityId),
  });

  useEffect(() => {
    getCities();
  }, [getCities]);

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
