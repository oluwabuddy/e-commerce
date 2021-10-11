import React from 'react'
import './styles.scss';
import sell from './../../assets/sell.jpg'

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={sell} alt="buddy logo" />
                </div>
            </div>
        </header>
    )
}

export default Header
