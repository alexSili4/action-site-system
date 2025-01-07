import { useEffect, useState } from 'react';
import { useMediaQuery, useSetSearchParams } from '@/hooks';
import { useCitiesStore } from '@/store/store';
import {
  selectGetCities,
  selectCities,
  selectIsLoaded,
  selectError,
} from '@/store/cities/selectors';
import { SearchParamsKeys, SectionsIds, theme } from '@/constants';
import { makeBlur, getShowLocationsBtnTitle, smoothScroll } from '@/utils';
import {
  AnchorClickEvent,
  BtnClickEvent,
  IGeneralOutletContext,
} from '@/types/types';
import {
  IUseLocationFilterProps,
  IUseLocationFilter,
} from '@/types/hooks.types';
import { useOutletContext } from 'react-router-dom';

const useLocationFilter = ({
  makeScroll,
  isRootPage,
  isModalWin,
  toggleShowSelectPromotionsLocationModalWin,
}: IUseLocationFilterProps): IUseLocationFilter => {
  const isDesktop = useMediaQuery(theme.breakpoints.desktop);
  const getCities = useCitiesStore(selectGetCities);
  const cities = useCitiesStore(selectCities);
  const isLoaded = useCitiesStore(selectIsLoaded);
  const { updateSearchParams, searchParams } = useSetSearchParams();
  const cityId = searchParams.get(SearchParamsKeys.cityId) ?? '';
  const [showLocationList, setShowLocationList] = useState<boolean>(false);
  const { showLocationsBtnTitle, isSelectedCity } = getShowLocationsBtnTitle({
    cities,
    cityId: Number(cityId),
  });
  const shouldMakeScroll = makeScroll && !showLocationList && !isDesktop;
  const { showOtherModalWin }: IGeneralOutletContext = useOutletContext() ?? {};
  const error = useCitiesStore(selectError);
  const isBigSize = isRootPage || isModalWin;

  useEffect(() => {
    if (!cities.length && !isLoaded && !error) {
      getCities();
    }
  }, [cities]);

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

    if (toggleShowSelectPromotionsLocationModalWin) {
      toggleShowSelectPromotionsLocationModalWin();
    }
  };

  return {
    onShowListBtnClick,
    showLocationList,
    isSelectedCity,
    showLocationsBtnTitle,
    onLocationLinkClick,
    toggleShowLocationList,
    showOtherModalWin,
    isBigSize,
  };
};

export default useLocationFilter;
