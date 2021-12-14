import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles['header__title']}>AragoK Budget App</h1>
        </header>
    )
};

export default React.memo(Header);
