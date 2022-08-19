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
            <a onClick={() => redirect()} className={'tth-img-link'}>
                <img className={'tth-img'} src={logo} alt="tth-logo"/>
            </a>
            <a onClick={() => redirect()}>
                <p>TheTourneyHub</p>
            </a>
            <a onClick={() => redirect()}>
                <p>Calendar</p>
            </a>
            <a onClick={() => redirect('teams')}>
                <p>Teams</p>
            </a>
            <a onClick={() => redirect('players')}>
                <p>Players</p>
            </a>
        </div>
    )
}


export default Header;