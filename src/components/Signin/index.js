import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./styles.scss";
import Buttons from '../forms/Button'
import { auth, signInWithGoogle} from "./../../firebase/utils"

import AuthWrapper from '../../AuthWrapper'
import FormInput from '../forms/FormInput'
import Button from '../forms/Button';

const initialState = {
    email: '',
    password: ''
}

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                ...initialState
            });
        } catch(err){
            //console.log(err)
        }
    }
    render() {
        const { email, password } = this.state

        const configAuthWrapper = {
            headline: 'LogIn'
        }
        return (
            <AuthWrapper {...configAuthWrapper}>
                    <div className="formWrap">
                        <form onSubmit={this.handleSubmit}>

                            <FormInput
                                type="email"
                                name="email"
                                value={email}
                                placeholder='Email'
                                handleChange={this.handleChange}
                            />
                            <FormInput
                                type="password"
                                name="password"
                                value={password}
                                placeholder='Password'
                                handleChange={this.handleChange}
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
}
   


export default Signin
