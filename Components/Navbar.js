import Link from 'next/link';

export default function Navbar() {
    return (
        <div id="navbar">
            <div>
                <img className='logo' src="/logo.png" />
                <ul>
                    <li><Link href="/">
                        <a title="Home" >HOME</a>
                    </Link></li>
                    <li><Link href="/Menu">
                        <a title="Menu" >MENU</a>
                    </Link></li>
                    <li><Link href="/TheExperience">
                        <a title="TheExperience">THE EXPERIENCE</a>
                    </Link></li>
                    <li><Link href="/Reviews">
                        <a title="Reviews">REVIEWS</a>
                    </Link></li>
                    <li><Link href="/Contact">
                        <a title="Contact">CONTACT</a>
                    </Link></li>
                    <li>
                        <a href="https://www.facebook.com/CheeseLouiseGA" title="followUs" target="_blank">FOLLOW US</a>
                    </li>
                </ul>
                <div className="footer">
                    <p className="note">© Cheese Louise 2020</p>
                </div>
            </div>
        </div>

    )
}