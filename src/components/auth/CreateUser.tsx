import { Fragment } from "preact/jsx-runtime";
import { apiUrl } from "../../config";
import { buttonAction, buttonRefine } from "../../styles/buttons";
import { Title } from "../Title";
import { ActionButtonWrapper, Box } from "../ui-utilities/uiComponents";
import { useState } from "preact/hooks";


export const CreateUser = (props) => {
  const formState = {};

  const [ alerts, setAlerts ] = useState("");

  const handleInput = (event) => {
    const target = event.target;
    formState[target.name] = target.value;
  };

  const Alert = (error) => {
    const errorLabel = document.getElementById('alert');
    errorLabel.setAttribute('visible', 'true');
    errorLabel.textContent = error;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formState)
    if (formState.password != formState.password2) {
      setAlerts('Passwords do not match!')
      console.log('nomatch')
      return;
    }
    const request: Request = new Request(
      `${apiUrl}/auth/create_user`, {
      body: JSON.stringify(formState),
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }
    });
    console.log(request);
    const response = await fetch(request, { mode: 'cors' });
    console.log(response);
  };

  return (
   <Fragment>
      <Title></Title>
      <Box style={containerStyle}>
        <h1>Create account</h1>
        <form action="" onSubmit={onSubmit}  style={signupForm}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onInput={handleInput} placeholder="Username" required minlength="6" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onInput={handleInput} placeholder="you@example.com" required  />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onInput={handleInput} placeholder="Password" required minlength="8" />
          <label htmlFor="password2">Confirm Password</label>
          <input type="password" name="password2" onInput={handleInput} placeholder="Password again just to be sure" required minlength="8" />
          { alerts.length > 0 && alerts }
          <ActionButtonWrapper style={btn}>
            <input type="submit" value="Submit" style={buttonAction}>Submit</input>
          </ActionButtonWrapper>
        </form>
      </Box>
   </Fragment>
  );
};

const containerStyle = {
  maxWidth: '400px',
  margin: 'auto',
}

const signupForm = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}

const btn = {
  display: 'inline-grid'
}