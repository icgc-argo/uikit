import { css } from '@emotion/react';

export default function Template({
  className,
  children,
  css,
}: {
  className?: any;
  children?: any;
  css?: any;
}) {
  return (
    <div data-testid="template" className={className}>
      {children}
    </div>
  );
}
