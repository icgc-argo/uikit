import { text } from '@storybook/addon-knobs';
import React from 'react';
import Tag from '.';
import Icon from '../Icon';

export const Basic = () => <Tag> {text('Tag label', 'Tag label')}</Tag>;

export const TagWithIcon = () => (
  <Tag>
    Tag label&nbsp;&nbsp;
    <Icon width="8px" height="8px" name="times" fill="#fff" />
  </Tag>
);

TagWithIcon.story = {
  name: 'Tag with icon',
};
