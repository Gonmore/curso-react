
import Body from '../components/home/body.jsx';
import Footer from '../components/home/footer.jsx';
import OpenLink from '../components/core/OpenLink.jsx';

import viteLogo from '../assets/vite.svg';
import reactLogo from '../assets/react.svg';
import githubLogo from '../assets/git.jpg';



const Home = () => {
    return (
        <div>
            <div>
                <OpenLink
                    redirectURL="https://vite.dev"
                    logoImage={viteLogo}
                />
                <OpenLink
                    redirectURL="https://react.dev"
                    logoImage={reactLogo}
                />
                <OpenLink
                    redirectURL="https://github.com/dheeyi/desarrollo-frontend-react-2025"
                    logoImage={githubLogo}
                />
            </div>
            <Body />
            <Footer />
        </div>
    );
};

export default Home;