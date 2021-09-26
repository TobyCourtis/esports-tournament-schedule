import './Header.css'
import React, {useEffect} from "react";
import logo from './tth-cal-logo.png'

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

    return (
        <div className={navbarClasses.join(" ")}>
            <a href={'https://thetourneyhub.com'} className={'tth-img-link'}>
                <img className={'tth-img'} src={logo} alt="tth-logo"/>
            </a>
        </div>
    )
}


export default Header;