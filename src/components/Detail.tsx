import axios from "axios";
import { useEffect, useState } from "preact/hooks";
import { Footer } from "./Footer";
import { Title } from "./Title";
import { Pattern } from "./PatternDetail";

interface DetailProps {
  Image: String;
	path: String;
  // url: String;
}

export function Detail(props:DetailProps) {
	const [data, setData] = useState([]);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`/pattern/${props.Image}`);
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };
  
    fetchData();
  }, []);

	if (loading) {
			return <div>Loading...</div>;
	}

	if (error) {
			return <div>Error: {error.message}</div>;
	}

  return (
    <div>
    <Title />
    <Pattern data={data} />
    <Footer /> 
    </div>
  )
}