import { Link } from "preact-router"
import { UserContext } from "./user/UserContext"
import { useContext, useState } from "preact/hooks"
import { Fragment } from "preact/jsx-runtime"
import { apiUrl } from "../config";
import axios from "axios";
import { apiInstance } from "./auth/Api";
import { buttonAction, buttonRefine } from "../styles/buttons";
import { accent, borderRadius } from "./ui-utilities/globalParameters";

export function Title(props) {
  const { user, setUser } = useContext(UserContext);

  // Logout functionality 
  // TODO: Move to sep component
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
    
    console.log(user)

    return (
      <Fragment>
        <div style={userBubble}>

          { user.username }
          <button onClick={logout} style={logoutBtn}>Log out</button>
        </div>
      </Fragment>
    )
  };

  const Hint = ({ children, hintText }) => {
    const [ visible, setVisible ] = useState(false);

    const activate = () => {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 2000)
    }

    const wrapperStyle = {
      display: 'inline',
      position: 'relative',
      textAlign: 'center',
      alignItems: 'center',
    }

    const hintOn = {
      display: 'inline',
      position: 'absolute',
      backgroundColor: '#666',
      color: 'white',
      padding: '1rem',
      borderRadius,
      bottom: '-4rem',
      left: '-35%',
      width: '150%'
    }

    const hintOff = {
      display: 'none'
    }

    const cubeOn = {
      position: 'absolute',
      width: '10px',
      height: '10px',
      backgroundColor: '#666',
      transform: 'rotate(45deg)',
      bottom: '-1.2rem',
      display: 'inline'
    }

    const cubeOff = {
      display: 'none'
    }
    
    return (
      <div onClick={activate}
        style={wrapperStyle}
      >
        <div style={ visible ? hintOn : hintOff }>{ hintText }</div>
        <div style={ visible ? cubeOn : cubeOff }></div>
        { children }
      </div>
    )

  }

  return (
    <header className={'title'} style={head}>
      <Link href="/">
  			<h1 style={title}>Super Pattern List</h1>
      </Link>
      <nav style={nav} className="flex-row-to-col">
        { user && 
          <Link href="/input">
            <li style={link}>Add Pattern</li>
          </Link>
        }
        { !user && 
        <Fragment>
          <Hint hintText="You must be logged in">
            <li style={link}>Add Pattern</li> 
          </Hint>
          <Link href="/login">
            <li style={link}>Log In</li>
          </Link>
        </Fragment>
        }
        { user && <li><Usertag user={user}></Usertag></li> }
      </nav>
      
    </header>
  )
};


const userBubble = {
  borderRadius,
  border: '1px solid #efefef',
  padding: '1rem',
}

const logoutBtn = {
  borderRadius: '4px',
  backgroundColor: accent,
  border: 'none',
  marginLeft: '1rem',
};

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