import React, { useState } from 'react';
import styles from './ColorPicker.module.css';

function ColorPicker() {
    const [color, setColor] = useState('#ffffff');

    const updateColor = (e) => {
        setColor(e.target.value);
    };

    return (
        <div className={styles.colorPickerContainer}>
            <h1>Color Picker App</h1>
            <p>Selected Color: <span className={styles.colorValue}>{color}</span></p>
            <div className={styles.colorDisplay} style={{ backgroundColor: color }}></div>
            <label htmlFor="color" className={styles.colorLabel}>Select a Color</label>
            <input
                type="color"
                value={color}
                onChange={updateColor}
                name="color"
                id="color"
                className={styles.colorInput}
            />
        </div>
    );
}

export default ColorPicker;
