import { ComponentProps, render } from 'preact';

import axios, {isCancel, AxiosError} from 'axios';

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
			const { filterToDelete, ...newState } = filters;
			setFilters(newState);
			console.log(newState)
		}
	
		return {
			filters, setFilters, removeFilter
		}
	}

	const [data, setData] = useState([]);
	const [schema, setSchema] = useState([]);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
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

			fetchData();
			fetchSchema();
	}, []); // The empty dependency array ensures that this effect runs only once, equivalent to componentDidMount in class components

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
			<PatternList data={data}
				filters={filterStateObject.filters} />
			<Footer />
		</div>
	);
}

render(<App />, document.getElementById('app'));
