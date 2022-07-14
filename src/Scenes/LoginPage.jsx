import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"
import {loginUser} from "../api/lessonsApi";

const StyledLoginPage = styled.div`
`

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <form onSubmit={loginUser(oAuth key).then(({data}) => {setIsUserLoggedIn(data.acess, data.refresh)})}>
        <input type={"email"} className={}/> email
        <input type={"password"} className={}/>  password
        <button type={"submit"}>Submit</button>
      </form>
    </StyledLoginPage>
  );
}

LoginPage.propTypes = {};
LoginPage.defaultProps = {};

export default LoginPage;