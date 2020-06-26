import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="nav">
            <div className='listElements'>
                <ul >
                    <li>
                        <img className='logo' src="/logo.png" />
                    </li>
                    <li><Link href="/Home">
                        <a title="Home" >Home</a>
                    </Link></li>
                    <li><Link href="/Menu">
                        <a title="Menu" >Menu</a>
                    </Link></li>
                    <li><Link href="/TheExperience">
                        <a title="TheExperience">The Experience</a>
                    </Link></li>
                    <li><Link href="/Reviews">
                        <a title="Reviews">Reviews</a>
                    </Link></li>
                    <li><Link href="/Contact">
                        <a title="Contact">Contact</a>
                    </Link></li>
                </ul>
            </div>
        </div>

    )
}

