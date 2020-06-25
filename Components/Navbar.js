import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="nav">
            <div className='listElements'>
                <ul >
                    <li>
                        <img className='logo' src="/logo.png" />
                    </li>
                    <li><Link href="/Home" className="navbar">
                        <a title="Home" >Home</a>
                    </Link></li>
                    <li><Link href="/Menu" className="navbar">
                        <a title="Menu" >Menu</a>
                    </Link></li>
                    <li><Link href="/TheExperience" className="navbar">
                        <a title="TheExperience">The Experience</a>
                    </Link></li>
                    <li><Link href="/Reviews" className="navbar">
                        <a title="Reviews">Reviews</a>
                    </Link></li>
                    <li><Link href="/Contact" className="navbar">
                        <a title="Contact">Contact</a>
                    </Link></li>
                </ul>
            </div>

            <style jsx>{`
               .nav {
                   background-color: #f4a712;
                   float: left;
                   color: #f2f2f2;
                   height: 100vh;
                   width: 25%;
               }
               ul {
                list-style-type: none;
                padding-top: 25%;
               }
               .listElements {
                   
               }
               
               .nav a {
                color: black;
                text-align: center;
                padding-top: 25px;
                text-decoration: none;
                font-size: 17px;
                font-family: "Poppins"

            }
               .logo {
                   height: 100px;
                   width: auto;
                   display: flex;
               }
                
                .main-nav {
                    list-style: none;
                    vertical-align: baseline;
                }

                .nav a:hover {
                    background-color: #9cd6d6;
                    color: black;
                    
                    
                }
        
            }
            `}</style>
        </div>

    )
}

