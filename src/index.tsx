import { ComponentProps, h, render } from 'preact';
import Router, { Route } from 'preact-router';

import axios, {isCancel, AxiosError} from 'axios';

import './style.css';
import './styles/colors.css';
import { PropsWithChildren, useEffect, useState } from 'preact/compat';
import { PatternList } from './components/PatternList';
import { Filter } from './components/Filter';
import { Title } from './components/Title';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Detail } from './components/Detail';

const App:preact.FunctionComponent = () => {
	return (
		<div>
			<Router>
				<Main path="/" />
				<Detail path="/detail/:Image" Image={':Image'}/>
			</Router>
		</div>
	)
}

render(<App />, document.getElementById('app'));
