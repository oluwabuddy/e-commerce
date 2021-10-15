import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import "./styles.scss";
import Buttons from '../forms/Button'
import { auth, signInWithGoogle} from "./../../firebase/utils"

import AuthWrapper from '../../AuthWrapper'
import FormInput from '../forms/FormInput'
import Button from '../forms/Button';

const Signin = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }
    const handleSubmit = async e => {
        e.preventDefault();
        
        try {

            await auth.signInWithEmailAndPassword(email, password);
            resetForm();
            props.history.push('/')
        } catch(err){
            //console.log(err)
        }
    }

        const configAuthWrapper = {
            headline: 'LogIn'
        }
        return (
            <AuthWrapper {...configAuthWrapper}>
                    <div className="formWrap">
                        <form onSubmit={handleSubmit}>

                            <FormInput
                                type="email"
                                name="email"
                                value={email}
                                placeholder='Email'
                                handleChange={e => setEmail(e.target.value)}
                            />
                            <FormInput
                                type="password"
                                name="password"
                                value={password}
                                placeholder='Password'
                                handleChange={e => setPassword(e.target.value)}
                            />

                            <Buttons type="submit">
                                Login
                            </Buttons>

                            <div className="socialSignin">
                                <div className="row">
                                    <Button onClick={signInWithGoogle}>
                                        sign in with google
                                    </Button>
                                </div>
                            </div>

                            <div className="links">
                                <Link to="/recovery">
                                    Reset Password
                                </Link>
                            </div>
                        </form>
    
                    </div>
            </AuthWrapper>
        )
}
   


export default withRouter(Signin);
