import { useEffect, useState } from 'react';
import { colors } from '../../config';
import HSL from '../../classes/HSL';
import styles from './styles.module.css';

const Home = () => {
  const [color, setColor] = useState<HSL | undefined>();

  const pickAleatoryColor = () => {
    const aleatoryIndex = Math.floor(Math.random() * colors.flat().length);
    const color = colors.flat().at(aleatoryIndex);
    setColor(color);
  }

  useEffect(() => {
    pickAleatoryColor();
  }, []);

  return (color) && (
    <div id={styles.container} style={{ backgroundColor: color.toHSLString() }}>
      <span id={styles.displayedColor} style={{ color: color.getFontColor() }}>
        {color.toHexString()}
      </span>

      <div id={styles.button} style={{ borderColor: color.getFontColor() }} onClick={pickAleatoryColor}>
        <span style={{ color: color.getFontColor() }}>Surpreenda-me</span>
      </div>
    </div>
  );
}

export default Home;