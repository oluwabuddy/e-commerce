import React from 'react'
import { useSelector } from 'react-redux'
import './styles.scss';
import { Link } from 'react-router-dom'
import { auth } from "./../../firebase/utils"
import sell from './../../assets/sell.jpg'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Header = props => {
    const { currentUser } = useSelector(mapState);
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                         <img src={sell} alt="buddy logo" />
                    </Link>
                </div>
                <div className="callToActions">

                    { currentUser && (
                        <ul>
                             <li>
                            <Link to="/dashboard">
                                My Account
                            </Link>
                        </li>
                            <li>
                                <span onClick={() => auth.signOut()}>
                                    LOGOUT
                                </span>
                            </li>
                       </ul>
                    )}

                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                    </ul>
                    )}          
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    currentUser: null
};



export default Header;
