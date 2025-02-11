import { usePaginationBar } from '@/hooks';
import { FC } from 'react';
import { Container, List, TemplateItem } from './PaginationBar.styled';
import { IProps } from './PaginationBar.types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { theme } from '@/constants';
// components
import PaginationBarBtn from '@GeneralComponents/PaginationBarBtn';
import { Button } from '@GeneralComponents/PaginationBarBtn/PaginationBarBtn.styled';

const PaginationBar: FC<IProps> = ({ totalPages }) => {
  const {
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
  } = usePaginationBar({ totalPages });

  return (
    <Container>
      <Button
        isNavBtn
        disabled={isBackNavBtnDisable}
        onClick={onPrevPageBtnClick}
      >
        <FaChevronLeft size={theme.iconSizes.cabinetPaginationBtn} />
      </Button>
      <List>
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
      </List>
      <Button
        isNavBtn
        disabled={isNextNavBtnDisable}
        onClick={onNextPageBtnClick}
      >
        <FaChevronRight size={theme.iconSizes.cabinetPaginationBtn} />
      </Button>
    </Container>
  );
};

export default PaginationBar;
