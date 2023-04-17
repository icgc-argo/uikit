/*
 * Copyright (c) 2020 The Ontario Institute for Cancer Research. All rights reserved
 *
 * This program and the accompanying materials are made available under the terms of
 * the GNU Affero General Public License v3.0. You should have received a copy of the
 * GNU Affero General Public License along with this program.
 *  If not, see <http://www.gnu.org/licenses/>.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
 * SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER
 * IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
 * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import defaultTheme from './theme/defaultTheme';
export type UikitTheme = typeof defaultTheme;

export { css } from '@emotion/react';
export { default as isPropValid } from '@emotion/is-prop-valid';
export { default as noDataSvg } from './assets/noData.svg';
export { default as overtureLogo } from './assets/overture-logo.svg';
export { default as ThemeProvider, styled } from './ThemeProvider';
export { default as useTheme } from './utils/useTheme';
export { default as colors } from './theme/defaultTheme/colors';
export {
  CellContext,
  ColumnDef,
  ColumnSort,
  createColumnHelper,
  OnChangeFn,
  PaginationState,
  Row,
  SortingFnOption,
  SortingState,
} from '@tanstack/react-table';

// single point of export ensures lib export works correctly
export * from './Affix';
export * from './AppBar';
export * from './Button';
export * from './Button/constants';
export * from './Button/GoogleLogin';
export * from './Button/types';
export * from './ClipboardCopyField';
export * from './Container';
export * from './ContentMenu';
export * from './ContentPlaceholder';
export * from './DnaLoader';
export * from './DropdownButton';
export * from './DropdownPanel';
export * from './Facet';
export * from './Facet/NumberRangeFacet';
export * from './FileSelectButton';
export * from './FocusWrapper';
export * from './Footer';
export * from './form/Checkbox';
export * from './form/common';
export * from './form/FormCheckbox';
export * from './form/FormControl';
export * from './form/FormHelperText';
export * from './form/FormRadio';
export * from './form/Input';
export * from './form/InputLabel';
export * from './form/MultiSelect';
export * from './form/Radio';
export * from './form/RadioCheckboxGroup';
export * from './form/Select';
export * from './form/Textarea';
export * from './Icon';
export * from './Icon/icons';
export * from './Icon/InteractiveIcon';
export * from './InstructionBox';
export * from './Legend';
export * from './Link';
export * from './MailTo';
export * from './Modal';
export * from './notifications/Banner';
export * from './notifications/Notification';
export * from './notifications/Toast';
export * from './notifications/ToastStack';
export * from './NumberRangeField';
export * from './OptionsList';
export * from './PageLayout';
export * from './PercentageBar';
export * from './PercentBar';
export * from './Pipe';
export * from './Portal';
export * from './Progress';
export * from './SubMenu';
export * from './SystemAlert';
export * from './Table';
export * from './TableV8';
export * from './TableV8/SimpleTable';
export * from './TableV8/TableFilters';
export * from './TableV8/TablePagination';
export * from './TableV8/TableTabs';
export * from './TableV8/TableCells';
export * from './TableV8/styled';
export * from './TableV8/types';
export * from './Tabs';
export * from './Tag';
export * from './theme/types';
export * from './TitleBar';
export * from './TitleBorder';
export * from './Tooltip';
export * from './transitions/Fade';
export * from './Typography';
export * from './utils/Hook/useElementDimension';
export * from './utils/useClickAway';
export * from './VerticalTabs';
