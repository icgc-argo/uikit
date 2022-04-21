import { TooltipProps as TippyProps } from 'react-tippy';

// exposing full react-tippy API based on https://github.com/tvkhoa/react-tippy
// extending the html prop to support our previous implementation which also accepted strings
export type TooltipProps = Omit<TippyProps, 'html'> & {
  html?: React.ReactElement<any> | React.ReactNode | string;
};
