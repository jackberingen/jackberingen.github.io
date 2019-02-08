import * as PIXI from 'pixi.js';
import { CRTFilter } from '@pixi/filter-crt';

export default ()=>{
  return [
    new CRTFilter({
      curvature: 10, 
      lineWidth: 4,
      lineContrast: 0.45,
      vignetting: 0.3, 
      vignettingBlur: 0.3, 
      vignettingAlpha: 1.3,
      seed: 0,
      time: 1
    }),
    new PIXI.filters.NoiseFilter(0.12)
  ];
};