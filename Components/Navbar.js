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
                    <li><Link href="/index" className="navbar">
                        <a title="Home" >HOME</a>
                    </Link></li>
                    <li><Link href="/Menu" className="navbar">
                        <a title="Menu" >MENU</a>
                    </Link></li>
                    <li><Link href="/TheExperience" className="navbar">
                        <a title="TheExperience">THE EXPERIENCE</a>
                    </Link></li>
                    <li><Link href="/Reviews" className="navbar">
                        <a title="Reviews">REVIEWS</a>
                    </Link></li>
                    <li><Link href="/Contact" className="navbar">
                        <a title="Contact">CONTACT</a>
                    </Link></li>
                </ul>
            </div>

            <style jsx>{`
               .nav {
                   background-color: #f4a712;
                   display: inline-block;
                   color: #f2f2f2;
                   height: 100vh;
                   width: 25%;
               }
               ul {
                list-style-type: none;
                margin-top: 20vh;
                line-height: 1.6;
                display: inline-block;
                text-align: center;
                
               }
               .listElements {
                   
               }
               
               .nav a {
                color: black;
                padding-top: 25px;
                text-decoration: none;
                font-size: 17px;
                font-family: 'Crete Round', serif;

            }
               .logo {
                   height: 100px;
                   width: auto;
                   display: inline-block;
               }
                
                .main-nav {
                    list-style: none;
                    vertical-align: baseline;
                }

                .nav a:hover {
                    color: #89837E;
                    
                    
                }
        
            }
            `}</style>
        </div>

    )
}

