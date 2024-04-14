import { useEffect, useState } from 'react';
import {
  FiChevronsRight as ChevronDoubleRight,
  FiChevronsLeft as ChevronDoubleLeft,
  FiChevronRight as ChevronRight,
  FiChevronLeft as ChevronLeft,
} from 'react-icons/fi';
import { useTheme } from 'styled-components';
import { CurrentPage, NavigatorButton, PaginationBox, PaginationContainer } from './styles';
import { IPaginationProps } from './types';

export function Pagination({ currentPage, totalPages, onPageChange }: IPaginationProps) {
  const [actualPage, setActualPage] = useState(currentPage);
  const { colors: theme } = useTheme();

  useEffect(() => {
    setActualPage(currentPage);
  }, [currentPage]);

  function onNext() {
    setActualPage((prev: number) => {
      if (prev === totalPages) {
        return prev;
      }
      onPageChange(prev + 1);
      return prev + 1;
    });
  }

  function onPrevious() {
    setActualPage((prev: number) => {
      if (prev === 1) {
        return prev;
      }
      onPageChange(prev - 1);
      return prev - 1;
    });
  }

  return (
    <>
      {totalPages != 0 && (
        <PaginationBox>
          <PaginationContainer>
            <NavigatorButton
              onClick={() => {
                setActualPage(1);
                onPageChange(1);
              }}
            >
              <ChevronDoubleLeft color={theme.typography.basic} />
            </NavigatorButton>
            <NavigatorButton onClick={onPrevious}>
              <ChevronLeft color={theme.typography.basic} />
            </NavigatorButton>

            <CurrentPage className="actual-page">{actualPage}</CurrentPage>

            <NavigatorButton onClick={onNext}>
              <ChevronRight color={theme.typography.basic} />
            </NavigatorButton>

            <NavigatorButton
              onClick={() => {
                setActualPage(totalPages);
                onPageChange(totalPages);
              }}
            >
              <ChevronDoubleRight color={theme.typography.basic} />
            </NavigatorButton>
            <CurrentPage>de {totalPages}</CurrentPage>
          </PaginationContainer>
        </PaginationBox>
      )}
    </>
  );
}
