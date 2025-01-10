import { Fragment } from "preact/jsx-runtime"
import { apiUrl } from "../../config"
import { Title } from "../Title"
import { ActionButtonWrapper, Box } from "../ui-utilities/uiComponents"
import { buttonAction } from "../../styles/buttons"
import { useContext, useState } from "preact/hooks"
import { route } from "preact-router"
import { UserContext } from "../user/UserContext"
import axios from "axios"
import { apiInstance } from "./Api"

export const Login = ( props ) => {
  const [ formState, setFormState ] = useState({
    username: '',
    password: ''
  });
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState("");

  const { user, setUser } = useContext(UserContext);

  const handleInput = (event) => {
    const target = event.target;
    setFormState((prev) => { 
      return {...formState, [target.name]: target.value };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const response = await apiInstance.post('/auth/login', formState, {
      withCredentials : true,
      headers: {'Content-Type': 'application/json'},
    }).then(res => res)
    // const request:Request = new Request(
    //   `${apiUrl}/auth/login`, { 
    //     body: JSON.stringify(formState), 
    //     method: 'POST',
    //     credentials: 'include',
    //     headers: {
    //       "Content-Type": "application/json",
    //     }
    //   } );
    console.log(response);
    if (response.status == 201) {
      setLoading(false);
      setError('Success!');
      const newUser = await response.data;
      setUser(newUser.user);
      route('/');
    } else {
      const error_text = await response.data;
      setLoading(false);
      setError(error_text.error);
    }
  }

  return (
    <Fragment>
      <Title></Title>
      <Box style={containerStyle}>
        <h1>Login</h1>
        <p>Don't have an account yet? <a href="/newuser">Create one!</a></p>
        <form action="" onSubmit={onSubmit} style={signupForm}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onInput={handleInput}/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onInput={handleInput}/>
          { loading && <h4>Loading...</h4> }
          { error.length > 0 && <h4>{error}</h4>}
          <ActionButtonWrapper style={btn}>
            <input type="submit" value="Login" style={buttonAction}>Login</input>
          </ActionButtonWrapper>
        </form>
      </Box>
    </Fragment>
  )
}

const btn = {
  display: 'inline-grid'
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