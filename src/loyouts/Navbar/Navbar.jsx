import styles from './Navbar.module.scss'
import Logo from "../../components/Logo/Logo";
import socialIcons from "./SocialIcons";
import SocialIcon from "../../UI/SocialIcon/SocialIcon";

const Navbar = () => {
    return (
        <nav className={ styles.navbar }>
            <div className={ styles.container }>
                <div className={ styles.group }>
                    <Logo />

                    <ul className={ styles.list }>
                        <li>
                            <a href="#WaveNft">Wave NFTs</a>
                        </li>

                        <li>
                            <a href="#roadmap">Stories</a>
                        </li>

                        <li>
                            <a href="#contacts">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className={ styles.social_icons }>
                    {socialIcons.map((item, index) => {
                        return <SocialIcon img={item.img} key={index} />
                    })}
                </div>

            </div>
        </nav>
    )
}

export default Navbar;