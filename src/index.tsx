import "preact/debug";
import { ComponentProps, h, render } from 'preact';
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

const App:preact.FunctionComponent = () => {

	return (
		<Router>
				
					<Main path="/" />
					<Search path="/search/:term" />
					<Search path="/category/:category" />
					<Toolbox path="/toolbox" />
					<Detail path="/detail/:Image" Image={':Image'}/>
					<CompareDetail path="/pen/detail/:_id" _id={':_id'} />
					<Input path="/input" />
					<Edit path="/edit/:id" id={":id"} />
					<Suggestions path="/suggestions" />
				
			</Router>
	)
}

render(<App />, document.getElementById('app'));
