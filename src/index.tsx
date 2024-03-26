import { ComponentProps, h, render } from 'preact';
import Router, { Route } from 'preact-router';

import axios, {isCancel, AxiosError} from 'axios';

import './style.css';
import './styles/colors.css';
import './styles/effects.css';
import './styles/icons.css';
import { PropsWithChildren, useEffect, useState } from 'preact/compat';
import { PatternList } from './components/PatternList';
import { Filter } from './components/Filter';
import { Title } from './components/Title';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Detail } from './components/Detail';
import { Input } from './components/InputPattern';

const App:preact.FunctionComponent = () => {
	return (
			<Router>
				<Main path="/" />
				<Detail path="/detail/:Image" Image={':Image'}/>
				<Input path="/input" />
			</Router>
	)
}

render(<App />, document.getElementById('app'));
