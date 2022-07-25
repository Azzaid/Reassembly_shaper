import React, {useEffect, useState} from 'react';
import styled from "styled-components"
import {useDispatch} from "react-redux";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";
import {createUserLogInAction} from "../store/actions/userActionCreators";
import {asynchUserLogInAction} from "../store/selectors/userSelectors";

import { Formik, Form, FieldArray} from "formik";
import FormikInput from "../Components/FormikInputs/FormikInput";

const StyledLoginPage = styled.div`
`

const LoginPage = () => {
    const dispatch = useDispatch();

    const initialFormValues = {
        email:"",
        password:"",
        authorsNames:["", "", ""],
        education: [{}, {}, {}]
    }

    const validateForm = (formValues) => {
        console.log("form values", formValues);
        let isValid = true;
        let errorsObject = {};

        if (!formValues.email) {
            isValid = false;
            errorsObject.email = "Email is mandatory";
        }

        isValid = false;
        errorsObject.authorsNames = ["error1", "error2", "error3"]

        if (!isValid) return errorsObject
    }


  return (
    <StyledLoginPage>
        <Formik initialValues={initialFormValues}
                validate={validateForm}
                onSubmit={(formValues) => {console.log("form values", formValues)}}
        render={({values}) => {
            return (
                <Form>
                    <FormikInput name={"email"}/>
                    <FormikInput name={"password"} type="password" placeHolder={"Input password"}/>
                    <div>Favourite authors names</div>
                    <button type={"submit"}>Submit</button>
                    {values.authorsNames.map((name, index) => {
                        return (<FormikInput name={`authorsNames.${index}`}/>)
                    })}
                    <FieldArray
                        name="education"
                        render={arrayHelpers => (
                            <React.Fragment>
                                <button type={"button"} onClick={() => {arrayHelpers.push({})}}>Add</button>
                                {values.education.map((name, index) => {
                                    return (
                                        <React.Fragment>
                                            <button type={"button"} onClick={() => {arrayHelpers.remove(index)}}>Delete</button>
                                            <FormikInput placeholder={"startDate"} name={`education.${index}.startDate`}/>
                                            <FormikInput placeholder={"endDate"} name={`education.${index}.endDate`}/>
                                            <FormikInput placeholder={"University"} name={`education.${index}.name`}/>
                                        </React.Fragment>
                                    )
                                })}
                            </React.Fragment>
                        )}/>
                </Form>
            )
        }}/>
    </StyledLoginPage>
  );
}

export default LoginPage;