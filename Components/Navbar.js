import Link from 'next/link';

export default function Navbar() {
    return (
        <div id="navbar">
            <div id="container">
                <img className='logo' src="/logo.png" />
                <ul id="vertical-options">
                    <li><Link href="/">
                        <a title="Home" >HOME</a>
                    </Link></li>
                    <li><Link href="/Menu">
                        <a title="Menu" >MENU</a>
                    </Link></li>
                    <li><Link href="/Experience">
                        <a title="Experience">THE EXPERIENCE</a>
                    </Link></li>
                    <li><Link href="/Story">
                        <a title="Story">STORY</a>
                    </Link></li>
                    <li><Link href="/Contact">
                        <a title="Contact">CONTACT</a>
                    </Link></li>
                    <li>
                        <a href="https://www.facebook.com/CheeseLouiseGA" title="followUs" target="_blank">FOLLOW US</a>
                    </li>
                </ul>
                <i id="hamburger" className="material-icons" onClick={() => {document.getElementById('panel').classList.add('open')}}>menu</i>
                <div className="footer">
                    <p className="note">© Cheese Louise 2020</p>
                </div>
            </div>
            <div id="panel">
                <div id="top-row">
                    <i id="hamburger" className="material-icons" onClick={() => {document.getElementById('panel').classList.remove('open')}}>close</i>
                </div>
                <ul id="vertical-options-full">
                    <li onClick={() => {document.getElementById('panel').classList.remove('open')}}><Link href="/">
                        <a title="Home" >HOME</a>
                    </Link></li>
                    <li onClick={() => {document.getElementById('panel').classList.remove('open')}}><Link href="/Menu">
                        <a title="Menu" >MENU</a>
                    </Link></li>
                    <li onClick={() => {document.getElementById('panel').classList.remove('open')}}><Link href="/Experience">
                        <a title="Experience">THE EXPERIENCE</a>
                    </Link></li>
                    <li onClick={() => {document.getElementById('panel').classList.remove('open')}}><Link href="/Story">
                        <a title="Story">STORY</a>
                    </Link></li>
                    <li onClick={() => {document.getElementById('panel').classList.remove('open')}}><Link href="/Contact">
                        <a title="Contact">CONTACT</a>
                    </Link></li>
                    <li>
                        <a href="https://www.facebook.com/CheeseLouiseGA" title="followUs" target="_blank">FOLLOW US</a>
                    </li>
                </ul>
                <div id="footer-full">
                    <p className="note">© Cheese Louise 2020</p>
                </div>
            </div>
        </div>
    )
}