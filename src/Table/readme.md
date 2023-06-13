# Tables

This component uses [React-Table 8 API](https://tanstack.com/table/v8), with some additions as described below. React Table v8 is headless and doesn't provide UI components, only React hooks for creating the table and managing data.

## Client-side versus server-side

Tables must be entirely client-side or server-side - don't mix and match.

| Type        | Data loaded?                                  | Actions (filters, pages, sorting)               | State management                          | Default or optional           | Example: Sorting                                                          |
| ----------- | --------------------------------------------- | ----------------------------------------------- | ----------------------------------------- | ----------------------------- | ------------------------------------------------------------------------- |
| Client-side | All data is loaded at once                    | Data is organized in the browser by React Table | State managed by React Table              | Default (except for filters)  | Add the enableSorting prop                                                |
| Server-side | Only load the data that's currently displayed | Organize data on the server                     | State has to be managed outside the table | Optional (except for filters) | Add enableSorting, manualSorting, sortingState, and onSortingChange props |

## Features

- **Loading:** Add a boolean `loading` prop.
- **Filters:**
  - Filters don't use the React Table API.
  - Use the component `TableListFilterHeader` in the `header` property of the column definition for each column with filtering.
  - All of the state for the table must be managed manually in order to use filters.
  - Add the `withFilters` prop.
  - Example: DonorSummaryTable in ARGO platform-UI
- **Pagination:**
  - **Client-side:** Add the `showPageSizeOptions withPagination` props.
  - **Server-side:** Add the client-side props and `onPaginationChange pageCount paginationState manualPagination` props.
    - Example: DonorSummaryTable in ARGO platform-UI
- **Sorting:**
  - **Client-side:** Add `enableSorting`.
  - **Server-side:** Add the client-side props and `onSortingChange sortingState manualSorting` props.
    - Multi-sorting (sorting one column by multiple data properties) doesn't use the React Table API, but does use a modification of the sorting API. Must use server-side sorting to have multi-sorting.
    - Example: DonorSummaryTable in ARGO platform-UI
- **Tabs:**
  - Set up columns so that each tab is a top-level column, and the child columns of that column are all the columns that will be under that tab.
  - Use the `useTableTabs` hook and add `columnTabs` to the `meta` property of the column definition.
  - Example: DonorSummaryTable in ARGO platform-UI
- **Row selection:** Row selection doesn't use the React Table API. Instead, use the `useTableRowSelection` hook, and add a column with `TableRowSelectionCheckbox` in the header and cell.
  - Example: File Repository table in platform-UI
- **Custom styles:**
  - To change the background and other styling of a header or cell, use `TableHeaderWrapper` or `TableCellWrapper`.
    - This provides some basic styling but also allows CSS customization.
  - To fully replace the cell or header component (i.e. to make a background take up the entire cell) add `customHeader: true` / `customCell: true` to the column definitions's `meta` property.
  - To change the appearance of a header or cell based on the contents or properties of the table, cell, row, or column, use props. `cell: (props) => props.row.original` can be used to access the other data in the same row.
  - Changing the appearance of the entire row or column currently isn't possible. Instead, change the appearance of cells and headers based on their props.

## TypeScript

- Column definition:
  - The columns array must have the type `ColumnDef<MyDataShape>[]`. This is a partial type that comes from the React Table library.
  - The type `MyDataShape` must have all potential data properties that can appear in the table. It's used as a partial type.
  - Generics aren't accepted as arguments by `ColumnDef`.
  - Avoid putting React components in the data. If you want to show a React component in a table cell, you can add it in the `cell` property of the column definition.
- If using server-side features/manual state management: add custom types that suit your table, e.g. `type MyTableSortingState = SortingState & { id: MyTableIds }`.

## Developing new features

- **Meta:** To add custom properties, use [table meta](https://tanstack.com/table/v8/docs/api/core/table#meta) and [column meta](https://tanstack.com/table/v8/docs/api/core/column-def#meta). Meta properties require type definitions.
