import "preact/debug";
import { ComponentProps, createContext, h, render } from 'preact';
import Router, { Route } from 'preact-router';

import axios, {isCancel, AxiosError} from 'axios';

import './style.css';
import './styles/colors.css';
import './styles/type.css';
import './styles/effects.css';
import './styles/icons.css';
import './styles/search.css';
import './styles/forms.css';
import './styles/layout_utilities.css';
import { PropsWithChildren, useEffect, useState } from 'preact/compat';
import { PatternList } from './components/PatternList';
import { Filter } from './components/Filter';
import { Title } from './components/Title';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Detail } from './components/Detail';
import { Input } from './components/InputPattern';
import Edit from './components/Edit';
import { Suggestions } from './components/Suggestions';
import { Toolbox } from './components/toolbox/Toolbox';
import { CompareDetail } from './components/toolbox/CompareDetail';
import { Search } from "./components/Search";
import { SearchProvider } from "./components/SearchContext";
import { SearchBundle } from "./types";
import { Login } from "./components/auth/Login";
import { CreateUser } from "./components/auth/CreateUser";
import { UserContext } from "./components/user/UserContext";
import { apiUrl } from "./config";

const App:preact.FunctionComponent = () => {
	
	const [ user, setUser ] = useState(undefined);
	const userPackage = { user, setUser };
	axios.defaults.withCredentials = true;

	return (
		<UserContext.Provider value={userPackage} >
			<Router>
				<Main path="/" />
				<Search path="/search/:term" />
				<Search path="/category/:category" />
				<Login path="/login" />
				<CreateUser path="/newuser" />
				<Toolbox path="/toolbox" />
				<Detail path="/detail/:Image" Image={':Image'}/>
				<CompareDetail path="/pen/detail/:_id" _id={':_id'} />
				<Input path="/input" />
				<Edit path="/edit/:id" id={":id"} />
				<Suggestions path="/suggestions" />	
			</Router>
		</UserContext.Provider>
	)
}

render(<App />, document.getElementById('app'));
