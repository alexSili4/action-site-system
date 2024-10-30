import {
  IGetPaginationBarSettings,
  IGetPaginationBarSettingsProps,
} from '@/types/types';

const getPaginationBarSettings = ({
  pageNumbers,
  currentPage,
  step,
}: IGetPaginationBarSettingsProps): IGetPaginationBarSettings => {
  const firstPage = pageNumbers[0];
  const lastPage = pageNumbers[pageNumbers.length - 1];
  const isFirstPage = currentPage === firstPage;
  const isLastPage = currentPage === lastPage;
  const isValidPage = currentPage >= firstPage && currentPage <= lastPage;
  const isBackNavBtnDisable = !isValidPage || isFirstPage;
  const isNextNavBtnDisable = !isValidPage || isLastPage;
  const isShowPrevTemplateBtn =
    isValidPage && currentPage - step - 1 >= firstPage;
  const isShowNextTemplateBtn =
    isValidPage && currentPage + step + 1 <= lastPage;

  return {
    isValidPage,
    isBackNavBtnDisable,
    isNextNavBtnDisable,
    isShowNextTemplateBtn,
    isShowPrevTemplateBtn,
    isLastPage,
  };
};

export default getPaginationBarSettings;
