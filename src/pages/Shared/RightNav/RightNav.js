import { FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import toast from 'react-hot-toast';
import { FaDiscord, FaFacebook, FaMoneyCheck, FaNewspaper, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../../BrandCarousel/BrandCarousel';

const RightNav = () => {

    const { googleSignIn, githubSignIn, facebookSignIn, setLoading } = useContext(AuthContext);
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                toast.success("Google sign in successful.")
            })
            .catch(error => console.error(error))
    }
    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                toast.success("Github sign in successful.")
            })
            .catch(error => console.error(error))
            .finally(() => setLoading(false))
    }
    const handleFacebookSignIn = () => {
        facebookSignIn(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                toast.success("Facebook sign in successful.")
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="d-grid gap-2 my-3">
                <Button onClick={handleGoogleSignIn} variant="primary" size="lg">
                    Google Sign In
                </Button>
                <Button onClick={handleGithubSignIn} variant="warning" size="lg">
                    Github Sign In
                </Button>
                <Button onClick={handleFacebookSignIn} variant="info" size="lg">
                    Facebook Sign In
                </Button>
            </div>
            <ListGroup>
                <p>Find Us On</p>
                <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item><FaYoutube></FaYoutube> YouTube</ListGroup.Item>
                <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                <ListGroup.Item><FaDiscord></FaDiscord> Discord</ListGroup.Item>
                <ListGroup.Item><FaMoneyCheck></FaMoneyCheck> Privacy Policy</ListGroup.Item>
                <ListGroup.Item><FaNewspaper></FaNewspaper> Terms & Conditions</ListGroup.Item>
            </ListGroup>
            <div className='mt-3'>
                <p>Editorials</p>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightNav;