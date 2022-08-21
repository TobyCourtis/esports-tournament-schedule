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
                    <button onClick={() => redirect()} className={'tth-img-link'} id={'tth-img-link'}>
                        <img className={'tth-img'} src={logo} alt="tth-logo" id={'tth-img'}/>
                    </button>
                </li>
                <li>
                    <button onClick={() => redirect()}>
                        <p>TheTourneyHub</p>
                    </button>
                </li>

                <li className={'right'}>
                    <button onClick={() => redirect('players')}>
                        <p>Players</p>
                    </button>
                </li>
                <li className={'right'}>
                    <button onClick={() => redirect('teams')}>
                        <p>Teams</p>
                    </button>
                </li>
                <li className={'right'}>
                    <button onClick={() => redirect()}>
                        <p>Calendar</p>
                    </button>
                </li>
            </ul>
        </div>
    )
}


export default Header;