class HSL {
  private _hue: number;
  private _saturation: number;
  private _lightness: number;

  constructor(hue: number, saturation: number, lightness: number) {
    this._hue = hue;
    this._saturation = saturation;
    this._lightness = lightness;
  }

  static hexToHSL(hexCode: string) {
    let red = 0, green = 0, blue = 0;

    if (hexCode.length === 4) {
      red = Number('0x' + hexCode[1] + hexCode[1]);
      green = Number('0x' + hexCode[2] + hexCode[2]);
      blue = Number('0x' + hexCode[3] + hexCode[3]);

    } else if (hexCode.length === 7) {
      red = Number('0x' + hexCode[1] + hexCode[2]);
      green = Number('0x' + hexCode[3] + hexCode[4]);
      blue = Number('0x' + hexCode[5] + hexCode[6]);
    }
    
    red /= 255;
    green /= 255;
    blue /= 255;

    let channelMinimum = Math.min(red, green, blue),
        channelMaximum = Math.max(red, green, blue),
        delta = channelMaximum - channelMinimum,
        hue = 0,
        saturation = 0,
        lightness = 0;

    if (delta === 0)
      hue = 0;
    else if (channelMaximum === red)
      hue = ((green - blue) / delta) % 6;
    else if (channelMaximum === green)
      hue = (blue - red) / delta + 2;
    else
      hue = (red - green) / delta + 4;

    hue = Math.round(hue * 60);

    if (hue < 0)
      hue += 360;

    lightness = (channelMaximum + channelMinimum) / 2;
    saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));
    saturation = Number((saturation * 100).toFixed(1));
    lightness = Number((lightness * 100).toFixed(1));

    return [hue, saturation, lightness];
  }

  static parseHex(hexCode: string): HSL {
    const [hue, saturation, lightness] = HSL.hexToHSL(hexCode);
    return new HSL(hue, saturation, lightness);
  }
  
  generateVariants(variantsCount: number, leap: number): HSL[] {
    let lightness = this._lightness;
    let difference = lightness - (variantsCount * leap);
    if (difference < 0) lightness += difference;

    const colors: HSL[] = [];

    for (let i = 0; i < variantsCount; ++i) {
      const color = new HSL(this._hue, this._saturation, lightness - leap);
      lightness -= leap;
      colors.push(color);
    }

    return colors;
  }

  /**
   * 
   * @author <https://stackoverflow.com/a/41491220>
   */
  getFontColor() {
    const hexCode = this.toHexString().substring(1, 7);

    const red = parseInt(hexCode.substring(0, 2), 16);
    const green = parseInt(hexCode.substring(2, 4), 16);
    const blue = parseInt(hexCode.substring(4, 6), 16);
    const uicolors = [red / 255, green / 255, blue / 255];
    const c = uicolors.map((col) => {
      if (col <= 0.03928) return col / 12.92;
      return Math.pow((col + 0.055) / 1.055, 2.4);
    });
    const l = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
    return (l > 0.179) ? 'black' : 'white';
  }

  /**
   * 
   * @returns "hsl(37, 83%, 88%)"
   */
  toHSLString() {
    return `hsl(${this._hue}, ${this._saturation}%, ${this._lightness}%)`;
  }

  /**
   * 
   * @returns "#fae6c7"
   */
  toHexString() {
    let hue = this._hue;
    let saturation = this._saturation;
    let lightness = this._lightness;

    saturation /= 100;
    lightness /= 100;

    let c = (1 - Math.abs(2 * lightness - 1)) * saturation,
      x = c * (1 - Math.abs((hue / 60) % 2 - 1)),
      m = lightness - c / 2,
      red: number | string = 0,
      green: number | string = 0, 
      blue: number | string = 0; 

    if (0 <= hue && hue < 60) {
      red = c; green = x; blue = 0;
    } else if (60 <= hue && hue < 120) {
      red = x; green = c; blue = 0;
    } else if (120 <= hue && hue < 180) {
      red = 0; green = c; blue = x;
    } else if (180 <= hue && hue < 240) {
      red = 0; green = x; blue = c;
    } else if (240 <= hue && hue < 300) {
      red = x; green = 0; blue = c;
    } else if (300 <= hue && hue < 360) {
      red = c; green = 0; blue = x;
    }

    red = Math.round((red + m) * 255).toString(16);
    green = Math.round((green + m) * 255).toString(16);
    blue = Math.round((blue + m) * 255).toString(16);

    if (red.length === 1)
      red = '0' + red;
    if (green.length === 1)
      green = '0' + green;
    if (blue.length === 1)
      blue = '0' + blue;

    return `#${red}${green}${blue}`;
  }
}

export default HSL;
