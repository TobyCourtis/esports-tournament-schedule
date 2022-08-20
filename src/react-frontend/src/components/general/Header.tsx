import './Header.css'
import React, {useEffect} from "react";
import logo from './tth-cal-logo.png'
import {useHistory} from "react-router-dom";

function Header() {

    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > (window.innerHeight / 50)) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let navbarClasses = ['header-div'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    const history = useHistory();

    const redirect = (path: string = "") => {
        if (!path) {
            path = ""
        }
        history.push("/" + path);
    }

    return (
        <div className={navbarClasses.join(" ")}>
                <ul className="header-list">
                    <li>
                        <a onClick={() => redirect()}
                           className={'tth-img-link'}
                            id={'tth-img-link'}>
                            <img className={'tth-img'} src={logo} alt="tth-logo" id={'tth-img'}/>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => redirect()}>
                            <p>TheTourneyHub</p>
                        </a>
                    </li>

                    <li className={'right'}>
                        <a onClick={() => redirect('players')}>
                            <p>Players</p>
                        </a>
                    </li>
                    <li className={'right'}>
                        <a onClick={() => redirect('teams')}>
                            <p>Teams</p>
                        </a>
                    </li>
                    <li className={'right'}>
                        <a onClick={() => redirect()}>
                            <p>Calendar</p>
                        </a>
                    </li>
                </ul>
        </div>
    )
}


export default Header;