import React from 'react';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <h1 className={classes['header__title']}>AragoK Budget App</h1>
        </header>
    )
};

export default Header;
