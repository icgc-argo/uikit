import { css } from '@emotion/react';
import { PropsWithChildren, Ref, useRef, useState } from 'react';
import { Row } from 'react-grid-system';
import { DropdownPanel, TextInputFilter } from '../../DropdownPanel';
import { useTheme } from '../../ThemeProvider';

export const FilterableHeader = ({
  header,
  open,
  setOpen,
  focusFirst,
  buttonRef,
  panelRef,
  handleBlur,
  active,
  children,
  panelLegend,
}: PropsWithChildren<{
  header: string;
  open: boolean;
  setOpen?: (open?: boolean | any) => void;
  focusFirst?: () => void;
  buttonRef?: Ref<HTMLInputElement>;
  panelRef?: Ref<HTMLElement>;
  handleBlur?: (event?: any) => void;
  active?: boolean;
  panelLegend?: string;
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
        inputLabel={`Filter by ${header}`}
        triggerIcon="filter"
        triggerTooltip={`Filter by ${header}`}
        open={open}
        setOpen={setOpen}
        focusFirst={focusFirst}
        buttonRef={buttonRef}
        panelRef={panelRef}
        handleBlur={handleBlur}
        active={active}
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
  header,
  panelLegend,
  filterValue = [],
  onFilter = () => {},
}: {
  header: string;
  panelLegend?: string;
  filterValue?: string[];
  onFilter?: (text?: string) => void;
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
