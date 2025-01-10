import { Link } from "preact-router"
import { UserContext } from "./user/UserContext"
import { useContext } from "preact/hooks"
import { Fragment } from "preact/jsx-runtime"
import { apiUrl } from "../config";
import axios from "axios";
import { apiInstance } from "./auth/Api";

export function Title(props) {
  const { user, setUser } = useContext(UserContext);

  // Logout functionality 
  const Usertag = ({ user }) => {
    const logout = () => {
      const logoutAttempt = apiInstance.post(
        `/logout`, 
        { 
          withCredentials: true,
          headers: {'Content-Type': 'application/json'},
        }).then((response) => {
          if (response.status == 201) {
            setUser(undefined)
            return response
          } else {
            return response;
          };
      });
      console.log(logoutAttempt)
    };

    return (
      <Fragment>
        { user.username }
          <button onClick={logout}>- (logout)</button>
      </Fragment>
    )
  };

  return (
    <header className={'title'} style={head}>
      <Link href="/">
  			<h1 style={title}>Super Pattern List</h1>
      </Link>
      <nav style={nav} className="flex-row-to-col">
        <Link href="/input">
          <li style={link}>Add Pattern</li>
        </Link>
        { !user && 
          <Link href="/login">
            <li style={link}>Log In</li>
          </Link>
        }
        { user && <li><Usertag user={user}></Usertag></li> }
      </nav>
      
    </header>
  )
}

const flexRow = {
  display: 'flex',
  flexDirection: 'row', 
  flexWrap: 'wrap',
}

const nav = {
  textAlign: 'center',
  listStyle: 'none',
  alignContent: 'center',
  justifyContent: 'space-between',
  minWidth: '140px',
  alignItems: 'center',
  gap: '1rem',
}

const head = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  // margin: '0',
  padding: '0',
  justifyContent: 'space-between'
}

const title = {
  textAlign: 'left',
  // fontFamily: 'FitzgeraldBold',
  fontSize: '48px',
  // margin: 0,
  color: 'var(--primary-text)',
}

const link = {
  color: '#000',
  margin: '0 1rem'
}

// TODO MOVE
const disabled = {
  ...link,
  color: '#bbb'
}