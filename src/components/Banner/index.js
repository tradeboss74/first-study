// core
import React, {useState} from 'react';

//style
import styles from './styles.module.scss';

const Banner = () => {

    const [bwFilter, setBwFilter] = useState(false);

    return (
        <div className={`${styles.container} ${bwFilter && styles.bw}`}>
            <button 
                className={styles.actionButton}
                onClick={() => setBwFilter(!bwFilter)}
            >
                turn of the lights
            </button>
        </div>
    );
};

export default Banner;

