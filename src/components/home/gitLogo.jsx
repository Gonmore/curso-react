import gitLogo from "../../assets/git.jpg";

const GitLogo = () => {
    return (
            <div>
                <div>
                <a href="https://github.com/Gonmore/curso-react" target="_blank">
                        <img src={gitLogo} className="logo react" alt="Git logo"/>
                    </a>
                </div>
            </div>
        );
    };

    export default GitLogo;