import { Fragment } from "preact/jsx-runtime"
import { apiUrl } from "../../config"

export const Login = ( props ) => {
  const formState = {}

  const handleInput = (event) => {
    const target = event.target;
    formState[target.name] = target.value;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const request:Request = new Request(
      `${apiUrl}/auth/login`, { 
        body: JSON.stringify(formState), 
        method: 'POST',
        headers: {
          "Content-Type": "text/plain",
        }
      } );
    console.log(request)
    const response = await fetch( request );
    console.log(response)
  }

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input type="text" name="username" onInput={handleInput}/>
        <input type="password" name="password" onInput={handleInput}/>
        <input type="submit" value="login">Login</input>
      </form>
    </div>
  )
}