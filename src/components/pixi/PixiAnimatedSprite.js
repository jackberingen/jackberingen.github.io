import { CustomPIXIComponent } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

const TYPE = 'AnimatedSprite';
export const behavior = {
  customDisplayObject: ({ textures }) => {
    const sprite = new PIXI.AnimatedSprite(textures);
    sprite.play();
    return sprite;
  },
};
export default CustomPIXIComponent(behavior, TYPE);
