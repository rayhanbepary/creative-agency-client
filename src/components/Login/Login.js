import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import Logo from '../../images/logos/logo.png';
import { handleGoogleSignIn, initializeLoginFramework } from './LoginManager';


const Login = () => {


    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then( res => {
            setLoggedInUser(res);
            history.replace(from);
        })

    }


    return (
        <div className="login-container">
            <div className="container">
                <div className="row">
                    <div className="loginPage-logo text-center">
                        <img src={Logo} style={{width: "150px",height: '50px'}} alt="logo"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 login-content">
                        <h4>Login with</h4>
                        <div className="google-login" onClick={googleSignIn}>
                            <FcGoogle className="google-icon"/>
                            <span>Continue with Google</span>
                        </div>
                        <p>Don't have an account? <span>Create an account</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;