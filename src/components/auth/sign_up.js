import React, { Component } from 'react';

import SignUpForm from './sign_up_form';
import PageTitle from '../page-title';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUp extends Component {
    componentDidMount() {
        // make component to set no links to this page
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return(
            <div className='sign-up'>
                <PageTitle className='sign-up__page-title' title='Register' />
                <SignUpForm onSubmit={this.onSubmit} className='sign-up__form' />
            </div>
        )
    }
}

SignUp = connect(null, actions)(SignUp);
export default SignUp;