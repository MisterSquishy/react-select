// @flow

import React, { type AbstractComponent } from 'react';
import { type MenuProps } from '../components/Menu';
import { FadeAndSlide } from './transitions';

// strip transition props off before spreading onto select component
// note we need to be explicit about innerRef for flow
const AnimatedMenu = (
  WrappedComponent: AbstractComponent<MenuProps>
): AbstractComponent<MenuProps> => ({ in: inProp, onExited, ...props }) => (
  <FadeAndSlide
    component={WrappedComponent}
    in={inProp}
    onExited={onExited}
    {...props}
  />
);

export default AnimatedMenu;
