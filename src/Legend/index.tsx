import { useState } from 'react';
import { css } from '@emotion/core';
import DropdownButton, { DownloadButtonProps } from './../DropdownButton';
import { useTheme } from './../ThemeProvider';
import Icon from './../Icon';

enum DownloadOptionValues {
  NOT_APPLICABLE = 'NOT_APPLICABLE',
  NOT_AVAILABLE = 'NOT_AVAILABLE',
}

const Legend = () => {
  const theme = useTheme();
  const menuItems: DownloadButtonProps<DownloadOptionValues>['menuItems'] = [
    {
      value: DownloadOptionValues.NOT_APPLICABLE,
      display: (
        <div>
          <div className="legend--symbol">N/A</div>
          <div className="legend--text">Not Applicable</div>
        </div>
      ),
    },
    {
      value: DownloadOptionValues.NOT_AVAILABLE,
      display: (
        <div>
          <div className="legend--symbol">--</div>
          <div className="legend--text">Not Available</div>
        </div>
      ),
    },
  ];
  const [isLegendOpen, setLegendOpen] = useState(false);
  const onKeyPress = (e, { toggleMenuOpen }) => {
    if (e.key === 'Enter') {
      setLegendOpen(toggleMenuOpen);
    }
  };
  const toggleMenuHandler = () => {
    setLegendOpen(!isLegendOpen);
  };
  return (
    <DropdownButton
      css={css`
        margin-right: 8px;
        border: none;
      `}
      variant="secondary"
      menuItems={menuItems}
      controlledMenuShowState={isLegendOpen}
      onKeyPress={onKeyPress}
      onItemClick={toggleMenuHandler}
      onMouseEnter={toggleMenuHandler}
      onMouseLeave={toggleMenuHandler}
      menuStyles={`
            display: flex;
            flex-direction: column;
            flex-wrap: no-wrap;
            left: -50px;
            width: 130px;
            padding: 13px;
            .legend--symbol {
              margin-right: 13px;
              width: 20px;
              color: ${theme.colors.grey};
              font-style: italic;
            }
            .legend--text, .legend--symbol {
              display: inline-block;
            }
            :hover {
              cursor: default
            }
          `}
      menuItemStyles={`
            :hover {
              background: ${theme.colors.white};
            }
          `}
    >
      <span>
        <Icon
          name={'legend'}
          fill="accent2_dark"
          height="9px"
          css={css`
            margin-left: 5px;
            margin-right: 0px;
          `}
        />
        Legend
        <Icon
          name={isLegendOpen ? 'chevron_down' : 'chevron_right'}
          fill="accent2_dark"
          height="9px"
          css={css`
            margin-left: 5px;
            margin-right: 0px;
          `}
        />
      </span>
    </DropdownButton>
  );
};

export default Legend;
