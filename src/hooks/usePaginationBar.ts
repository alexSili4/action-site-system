import { SearchParamsKeys } from '@/constants';
import useSetSearchParams from './useSetSearchParams';
import { getPageNumbers, getPaginationBarSettings, makeBlur } from '@/utils';
import { BtnClickEvent, IOnPageBtnClickProps } from '@/types/types';
import { IUsePaginationBar, IUsePaginationBarProps } from '@/types/hooks.types';

const usePaginationBar = ({
  totalCount,
  step = 1,
  group,
}: IUsePaginationBarProps): IUsePaginationBar => {
  const { updateSearchParams, searchParams } = useSetSearchParams();
  const pageQuantity = Math.ceil(totalCount / group);
  const pageNumbers = getPageNumbers(pageQuantity);
  const currentPage = Number(searchParams.get(SearchParamsKeys.page) ?? 1);
  const {
    isBackNavBtnDisable,
    isNextNavBtnDisable,
    isShowNextTemplateBtn,
    isShowPrevTemplateBtn,
    isValidPage,
    isLastPage,
  } = getPaginationBarSettings({
    pageNumbers,
    currentPage,
    step,
  });

  const setPage = ({ e, page }: IOnPageBtnClickProps): void => {
    makeBlur(e.currentTarget);
    updateSearchParams({ key: SearchParamsKeys.page, value: String(page) });
  };

  const onPrevPageBtnClick = (e: BtnClickEvent): void => {
    setPage({ e, page: currentPage - 1 });
  };

  const onNextPageBtnClick = (e: BtnClickEvent): void => {
    setPage({ e, page: currentPage + 1 });
  };

  return {
    isBackNavBtnDisable,
    onPrevPageBtnClick,
    isShowPrevTemplateBtn,
    isValidPage,
    pageNumbers,
    currentPage,
    setPage,
    isShowNextTemplateBtn,
    isNextNavBtnDisable,
    onNextPageBtnClick,
    step,
    isLastPage,
  };
};

export default usePaginationBar;
