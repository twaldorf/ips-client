import { ComponentProps, render } from 'preact';

import axios, {isCancel, AxiosError} from 'axios';

import preactLogo from './assets/preact.svg';
import './style.css';
import { PropsWithChildren, useEffect, useState } from 'preact/compat';
import { PatternList } from './components/PatternList';
import { Filter } from './components/Filter';
import { Title } from './components/Title';
import { Footer } from './components/Footer';

export function App() {

	const initFilterState = () => {
		const [filters, setFilters] = useState({});
	
		const removeFilter = (filterToDelete)=> {
			let newState = filters;
			delete newState[filterToDelete];
			setFilters(newState);
		}
	

		return {
			filters, setFilters, removeFilter
		}
	}

	// State to store the fetched data
	const [data, setData] = useState([]);
	const [schema, setSchema] = useState([]);

	// State to store loading state
	const [loading, setLoading] = useState(true);

	// State to store error state
	const [error, setError] = useState(null);

	useEffect(() => {
			// Function to fetch data
			const fetchData = async () => {
					try {
							const response = await axios.get('/patterns');
							setData(response.data);
					} catch (error) {
							setError(error);
					} finally {
							// setLoading(false);
					}
			};

			const fetchSchema = async () => {
				try {
						const response = await axios.get('/schema');
						setSchema(response.data);
				} catch (error) {
						setError(error);
				} finally {
						setLoading(false);
				}
		};

			// Call the fetchData function when the component mounts
			fetchData();
			fetchSchema();
	}, []); // The empty dependency array ensures that this effect runs only once, equivalent to componentDidMount in class components

	// Render content based on loading and error states
	if (loading) {
			return <div>Loading...</div>;
	}

	if (error) {
			return <div>Error: {error.message}</div>;
	}

	const filterStateObject = initFilterState();

	return (
		<div>
			<Title />
			<Filter 
				filter={schema[0]} 
				filters={filterStateObject.filters} 
				setFilters={filterStateObject.setFilters}
				removeFilter={filterStateObject.removeFilter}/>
			<PatternList data={data} />
			<Footer />
		</div>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}

render(<App />, document.getElementById('app'));
