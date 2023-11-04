import HSL from '../classes/HSL';

const baseColors = {
  blue: '#3498db',
  green: '#2ecc71',
  red: '#e74c3c',
  yellow: '#f1c40f',
  orange: '#e67e22',
  pink: '#fd79a8',
};

const config = {
  variantsCount: 10,
  leap: 3,
};

export const colors: HSL[][] = Object.values(baseColors).map((hexCode) => HSL.parseHex(hexCode).generateVariants(config.variantsCount, config.leap));