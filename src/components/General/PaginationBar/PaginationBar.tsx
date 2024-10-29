import { usePaginationBar } from '@/hooks';
import { FC } from 'react';
import PaginationBarBtn from '@GeneralComponents/PaginationBarBtn';
import { Button, Item, List, TemplateItem } from './PaginationBar.styled';
import { IProps } from './PaginationBar.types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { theme } from '@/constants';

const PaginationBar: FC<IProps> = ({ totalCount, group }) => {
  const {
    isBackNavBtnDisable,
    onPrevPageBtnClick,
    isShowFirstPageBtn,
    onFirstPageBtnClick,
    firstPage,
    isShowPrevTemplateBtn,
    isValidPage,
    pageNumbers,
    currentPage,
    setPage,
    isShowNextTemplateBtn,
    isShowLastPageBtn,
    onLastPageBtnClick,
    lastPage,
    isNextNavBtnDisable,
    onNextPageBtnClick,
    step,
  } = usePaginationBar({ totalCount, group });

  return (
    <List>
      <Item>
        <Button disabled={isBackNavBtnDisable} onClick={onPrevPageBtnClick}>
          <FaChevronLeft size={theme.iconSizes.cabinetPaginationBtn} />
        </Button>
      </Item>
      {isShowFirstPageBtn && (
        <Item>
          <Button onClick={onFirstPageBtnClick}>{firstPage}</Button>
        </Item>
      )}
      {isShowPrevTemplateBtn && (
        <TemplateItem>
          <Button disabled>...</Button>
        </TemplateItem>
      )}
      {isValidPage &&
        pageNumbers.map((number) => (
          <PaginationBarBtn
            key={number}
            number={number}
            currentPage={currentPage}
            step={step}
            setPage={setPage}
          />
        ))}
      {isShowNextTemplateBtn && (
        <TemplateItem>
          <Button disabled>...</Button>
        </TemplateItem>
      )}
      {isShowLastPageBtn && (
        <Item>
          <Button onClick={onLastPageBtnClick}>{lastPage}</Button>
        </Item>
      )}
      <Item>
        <Button disabled={isNextNavBtnDisable} onClick={onNextPageBtnClick}>
          <FaChevronRight size={theme.iconSizes.cabinetPaginationBtn} />
        </Button>
      </Item>
    </List>
  );
};

export default PaginationBar;
