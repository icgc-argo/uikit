import { storiesOf } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import Modal from '.';

const ModalStories = storiesOf(`${__dirname}`, module).add('Basic', () => {
  const title = text('title', 'Hipster');
  const children = text(
    'children',
    `Lorem ipsum dolor amet hoodie iPhone palo santo freegan bitters chicharrones fingerstache taiyaki authentic fam skateboard next level helvetica forage. Squid typewriter mustache, chia shoreditch retro gluten-free tbh bicycle rights kickstarter pickled pork belly post-ironic. Authentic green juice tofu kickstarter. Yuccie shoreditch mustache, asymmetrical flexitarian four loko austin edison bulb 3 wolf moon stumptown church-key poutine everyday carry affogato prism. Cardigan church-key coloring book microdosing pabst listicle. Try-hard salvia paleo cloud bread, tbh tattooed craft beer chartreuse meh kinfolk squid austin. Fixie blog craft beer tacos, brunch shabby chic artisan bespoke DIY air plant four dollar toast art party vegan franzen.`,
  );
  const actionButtonText = text('actionButtonText', 'Beer Me');
  const cancelText = text('cancelText', 'nevermind');
  const actionDisabled = boolean('actionDisabled', false);
  return (
    <Modal.Overlay>
      <Modal
        title={title}
        actionButtonText={actionButtonText}
        cancelText={cancelText}
        actionDisabled={actionDisabled}
        onActionClick={action('onActionClick')}
        onCancelClick={action('onCancelClick')}
        onCloseClick={action('onCloseClick')}
      >
        {
          <div>
            {children}
            <div style={{ margin: '20px' }}>
              BTW you can use <strong style={{ color: 'red' }}>Modal.Overlay</strong> for the
              overlay. Storybook doesn't show it in Story Source very well.
            </div>
          </div>
        }
      </Modal>
    </Modal.Overlay>
  );
});

export default ModalStories;