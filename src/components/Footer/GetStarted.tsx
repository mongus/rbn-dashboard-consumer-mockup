import React, {FormEvent} from 'react';
import styled from 'styled-components';
import NavSection from "./NavSection";
import {Button, Input} from "../form";
import Error from "../Error";
import IUnderstandDisclaimer from "../IUnderstandDisclaimer";

const Form = styled.form`
  max-width: 300px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: .5rem;

  label {
    width: 100%;
    display: inline-block;
    margin: 0;
  }
  
  label input {
    margin: 0;
  }
  
  ${Button} {
    font-size: 85%;
    padding: 0 5px;
    min-width: 100px;
  }
  
  ${Error}, & > div {
    grid-column: span 2;
  }
`;

const GetStarted = () => {
    const error = false;

    const submitHandler = () => {};

    return (
        <NavSection heading="Get Started">
            <Form onSubmit={submitHandler}>
                <Input type="email" placeholder="Email Address" required name="email" defaultValue=""/>
                <Button>Get Started</Button>
                <IUnderstandDisclaimer/>
                {error && <Error error={error}/>}
            </Form>
        </NavSection>
    )
};

export default GetStarted;