import { Link } from 'react-router-dom'

import LOGO from '../assets/jess-dev-logo.png'

type LogoProps = {
    onClick?: () => void,
    customClasses?: string
}

const Logo = ({ onClick, customClasses }: LogoProps) => {
    return (
        <Link to="/"
            className={`transition-transform hover:scale-[1.02] active:scale-[0.98] ${customClasses}`}
            onClick={onClick}
        >
            <img src={LOGO} alt="Jessica Liang logo" className="w-s drop-shadow-lg" />
        </Link>
    )
}

export default Logo