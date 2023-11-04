import { colors } from '../../config';
import styles from './styles.module.css';

const Palette = () => (
  <div id={styles.container}>
    {colors.map((row, rowKey) => (
      <div key={rowKey} className={styles.row}>
        {row.map((color, squareKey) => (
          <div
            key={`${rowKey}-${squareKey}`}
            className={styles.square}
            style={{ backgroundColor: color.toHSLString() }}
          >
            <span style={{ color: color.getFontColor() }}>
              {color.toHexString()}
            </span>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Palette;