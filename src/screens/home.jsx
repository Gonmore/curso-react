import Logo from '../components/home/logo.jsx';
import Body from '../components/home/body.jsx';
import Footer from '../components/home/footer.jsx';
import GitLogo from '../components/home/gitLogo.jsx';

const Home = () => {
    return (
        <div>
            <Logo />
            <GitLogo />
            <Body />
            <Footer />
        </div>
    );
};

export default Home;