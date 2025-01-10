
import Body from '../components/home/body.jsx';
import Footer from '../components/home/footer.jsx';
import OpenLink from '../components/core/OpenLink.jsx';
import { useSelector, useDispatch } from 'react-redux'

import viteLogo from '../assets/vite.svg';
import reactLogo from '../assets/react.svg';
import githubLogo from '../assets/git.jpg';




const Home = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <span>Value: {count}</span>
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