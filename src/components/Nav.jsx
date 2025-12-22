function Nav() {
    return <nav>
        <div className="left">DVSY</div>
        <div className="right">
            <div className="bgScreen">
                <span className="navItem">DESIGNERS</span>
                <span className="navItem">COLLABS</span>
                <span className="navItem">EVENTS</span>
                <span className="navItem">BLOG</span>
                <span className="navItem">CARD</span>
            </div>

            <div className="smScreen">
                <span className="navItem">GET IN TOUCH</span>
            </div>
        </div>
    </nav>
}

export default Nav;