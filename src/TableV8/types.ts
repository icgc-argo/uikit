import { ColumnDef } from '@tanstack/react-table';

export type SortedChangeFunction = (
  newSorted: TableSortingRule[],
  column: any,
  additive: boolean,
) => void;

export type PageChangeFunction = (page: number) => void;
export type PageSizeChangeFunction = (newPageSize: number, newPage: number) => void;

export type TableProps = {
  page?: number;
  pages?: number;
  pageSize: number;
  sorted: TableSortingRule[];
  onPageChange?: PageChangeFunction;
  onPageSizeChange?: PageSizeChangeFunction;
  onSortedChange?: SortedChangeFunction;
  showPagination?: boolean;
};

export type TableFilterRule = {
  field: string;
  values: string[];
};

export type TablePaginationRule = {
  pages: number;
  pageSize: number;
  page: number;
};

export type NextTablePaginationRule = {
  pages?: number;
  pageSize?: number;
  page?: number;
};

export type TableSortingRule = { id: string; desc: boolean };
