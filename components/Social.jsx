import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa'

const socials = [
    {icon: <FaGithub></FaGithub>, path: ''},
    {icon: <FaLinkedin></FaLinkedin>, path: ''},
    {icon: <FaFacebook></FaFacebook>, path: ''},
    {icon: <FaTwitter></FaTwitter>, path: ''},
]

const Social = ({containerStyle, iconStyles}) => {
    return (
        <div className={containerStyle}>
            {
                socials.map((social, index) => {
                    return <Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>
                })
            }
        </div>
    );
};

export default Social;