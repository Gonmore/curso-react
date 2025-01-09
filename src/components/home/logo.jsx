import viteLogo from '../../../public/vite.svg'
import reactLogo from "../../assets/react.svg";
import gitLogo from "../../assets/git.jpg";

const Logo = () => {
    return (
            <div>
                <div>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                </div>
                <div>
                <a href="https://github.com/Gonmore/curso-react" target="_blank">
                        <img src={gitLogo} className="logo react" alt="Git logo"/>
                    </a>
                </div>
            </div>
        );
    };

    export default Logo;