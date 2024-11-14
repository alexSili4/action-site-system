import { useEffect, useState } from 'react';
import { useMediaQuery, useSetSearchParams } from '@/hooks';
import { useCitiesStore } from '@/store/store';
import { selectGetCities, selectCities } from '@/store/cities/selectors';
import { SearchParamsKeys, SectionsIds, theme } from '@/constants';
import { makeBlur, getShowLocationsBtnTitle, smoothScroll } from '@/utils';
import { AnchorClickEvent, BtnClickEvent } from '@/types/types';
import { IUseLocationFilter } from '@/types/hooks.types';

const useLocationFilter = (makeScroll: boolean): IUseLocationFilter => {
  const isDesktop = useMediaQuery(theme.breakpoints.desktop);
  const getCities = useCitiesStore(selectGetCities);
  const cities = useCitiesStore(selectCities);
  const { updateSearchParams, searchParams } = useSetSearchParams();
  const cityId = searchParams.get(SearchParamsKeys.cityId) ?? '';
  const [showLocationList, setShowLocationList] = useState<boolean>(false);
  const { showLocationsBtnTitle, isSelectedCity } = getShowLocationsBtnTitle({
    cities,
    cityId: Number(cityId),
  });
  const shouldMakeScroll = makeScroll && !showLocationList && !isDesktop;

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

    if (shouldMakeScroll) {
      smoothScroll({ id: SectionsIds.locationBtn });
    }
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
