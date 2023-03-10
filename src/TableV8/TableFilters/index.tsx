import { css } from '@emotion/react';
import { PropsWithChildren, Ref, useMemo, useRef, useState } from 'react';
import { Row } from 'react-grid-system';
import { DropdownPanel, FilterOption, ListFilter, TextInputFilter } from '../../DropdownPanel';
import { useTheme } from '../../ThemeProvider';

const FilterableHeader = ({
  active,
  buttonRef,
  children,
  focusFirst,
  handleBlur,
  header,
  open,
  panelLegend,
  panelRef,
  setOpen,
}: PropsWithChildren<{
  active?: boolean;
  buttonRef?: Ref<HTMLInputElement>;
  focusFirst?: () => void;
  handleBlur?: (event?: any) => void;
  header: string;
  open: boolean;
  panelLegend?: string;
  panelRef?: Ref<HTMLElement>;
  setOpen?: (open?: boolean | any) => void;
}>) => {
  const theme = useTheme();
  return (
    <Row
      css={css`
        margin: unset !important;
        justify-content: space-between !important;
        align-items: center !important;
        width: 100%;
      `}
    >
      <div
        css={css`
          white-space: normal;
          max-width: calc(100% - 14px);
          overflow: hidden;
          z-index: 10;
        `}
      >
        {header}
      </div>
      <DropdownPanel
        active={active}
        buttonRef={buttonRef}
        focusFirst={focusFirst}
        handleBlur={handleBlur}
        inputLabel={`Filter by ${header}`}
        open={open}
        panelRef={panelRef}
        setOpen={setOpen}
        triggerIcon="filter"
        triggerTooltip={`Filter by ${header}`}
        // occasionally, some dropdown panels need to be wider, or longer.
        // this customization was added instead of making the panel elastic
        // to prevent panels from running off the side of the page
        // or the bottom of the table.
        // panelLegend indicates which dropdown panel is affected
        css={css`
          ${['DNA Raw Reads Status'].includes(panelLegend) &&
          `
              width: 275px;
            `}
        `}
      >
        {children}
      </DropdownPanel>
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          ${open ? `background: ${theme.colors.grey_3};` : ''}
        `}
      />
    </Row>
  );
};

export const TextFilterHeader = ({
  filterValue = [],
  header,
  onFilter = () => {},
  panelLegend,
}: {
  filterValue?: string[];
  header: string;
  onFilter?: (text?: string) => void;
  panelLegend?: string;
}) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  // Focus on the input when the panel opens
  const focusInput = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Close dropdown panel when tabbing out of it
  const handleBlur = (e: FocusEvent) => {
    const nextTarget = e.relatedTarget as Node;

    if (open && !panelRef?.current?.contains(nextTarget)) {
      setOpen(false);
    }
  };

  return (
    <FilterableHeader
      header={header}
      open={open}
      setOpen={setOpen}
      focusFirst={focusInput}
      buttonRef={buttonRef}
      panelRef={panelRef}
      handleBlur={handleBlur}
      active={filterValue?.length > 0}
      panelLegend={panelLegend}
    >
      <TextInputFilter
        onConfirmClick={onFilter}
        inputLabel={`Filter by ${header}`}
        inputPlaceholder={`Search for ${header}...`}
        panelLegend={panelLegend || header}
        inputRef={inputRef}
        setOpen={setOpen}
        handleBlur={handleBlur}
        initialValue={filterValue[0] || ''}
      />
    </FilterableHeader>
  );
};

export const ListFilterHeader = ({
  activeFilters = [],
  filterCounts,
  filterOptions = [],
  header,
  onFilter = () => {},
  panelLegend,
}: {
  activeFilters?: Array<string>;
  filterCounts?: Record<string, number>;
  filterOptions?: Array<FilterOption>;
  header: string;
  onFilter?: (filters?: Array<FilterOption>) => void;
  panelLegend?: string;
}) => {
  const [open, setOpen] = useState(false);
  const options = useMemo(
    () =>
      filterOptions.map((option) => ({
        ...option,
        isChecked: activeFilters?.indexOf(option.key) > -1 ? true : false,
        doc_count: filterCounts?.[option.key],
      })),
    [filterOptions, activeFilters],
  );
  const buttonRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  // Close dropdown panel when tabbing out of it
  const handleBlur = (e: FocusEvent) => {
    const nextTarget = e.relatedTarget as Node;

    if (open && !panelRef?.current?.contains(nextTarget)) {
      setOpen(false);
    }
  };

  return (
    <FilterableHeader
      active={activeFilters.length > 0}
      buttonRef={buttonRef}
      handleBlur={handleBlur}
      header={header}
      open={open}
      panelLegend={panelLegend}
      panelRef={panelRef}
      setOpen={setOpen}
    >
      <ListFilter
        filterOptions={options}
        handleBlur={handleBlur}
        onConfirmClick={onFilter}
        open={open}
        panelLegend={panelLegend || header}
        setOpen={setOpen}
      />
    </FilterableHeader>
  );
};
