import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="nav">
            <div className='listElements'>
                <ul >
                    <li>
                        <link href="https://fonts.googleapis.com/css2?family=Crete+Round&display=swap" rel="stylesheet" />
                        <img className='logo' src="/logo.png" />
                    </li>
                    <li><Link href="/Home">
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
                </ul>
            </div>
        </div>

    )
}