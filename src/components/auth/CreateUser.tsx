import { Fragment } from "preact/jsx-runtime";
import { apiUrl } from "../../config";
import { buttonAction, buttonRefine } from "../../styles/buttons";
import { Title } from "../Title";
import { ActionButtonWrapper, Box } from "../ui-utilities/uiComponents";
import { useEffect, useState } from "preact/hooks";
import { borderRadius } from "../ui-utilities/globalParameters";


export const CreateUser = (props) => {

  // Loading and error states
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState('')

  // Formstate manager
  const [ formState, setFormState ] = useState({
    username: '',
    email: '',
    password: '',
    password2:'',
  })

  // Watch formstate for password equilibrium
  const passwordMatchEffect = useEffect(() => {
    if (formState.password === formState.password2) {
      setAlerts("");
    }
  }, Object.values(formState));

  // Simple alert string
  const [ alerts, setAlerts ] = useState("");

  // Input Handler
  const handleInput = async (event) => {
    const target = event.target;
    setFormState((last) => { 
      return { ...last, [target.name]: target.value };
    });
  };

  // Submission handler
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formState)
    if (formState.password != formState.password2) {
      setAlerts('Passwords do not match!')
      return;
    }
    setLoading(true);
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
    if (response.ok) setLoading(false); else setError(JSON.stringify(response.body));
    console.log(response);
  };

  return (
   <Fragment>
      <Title></Title>
      <Box style={containerStyle}>
        <h1>Create account</h1>
        <form action="" onSubmit={onSubmit}  style={signupForm}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onInput={handleInput} placeholder="Username" required minlength="6" value={formState.username}/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onInput={handleInput} placeholder="you@example.com" required  value={formState.email}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onInput={handleInput} placeholder="Password" required minlength="8" value={formState.password}/>
          <label htmlFor="password2">Confirm Password</label>
          <input type="password" name="password2" onInput={handleInput} placeholder="Password again just to be sure" required minlength="8" value={formState.password2}/>
          { alerts.length > 0 && <h4 style={alertStyle}>{alerts}</h4> }
          { loading && <h4>Loading...</h4> }
          { error.length > 0 && <h4 style={alertStyle}>{error}</h4>}
          <ActionButtonWrapper style={btn}>
            <input type="submit" value="Submit" style={buttonAction}>Submit</input>
          </ActionButtonWrapper>
        </form>
      </Box>
   </Fragment>
  );
};

const alertStyle = {
  backgroundColor: '#ee4444',
  color: 'white',
  padding: '1rem',
  borderRadius,
  display: 'inline',

}

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