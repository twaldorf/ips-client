import axios from "axios";
import { useEffect, useState } from "preact/hooks";
import { Footer } from ".././Footer";
import { Title } from ".././Title";
import { apiUrl } from "../../config";
import { ComparePatternDetail } from "./ComparePatternDetail"; // Import the ComparePattern component

interface DetailProps {
  path: string;
  _id: string;
  // url: String;
}

export function CompareDetail(props:DetailProps) {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get(`${apiUrl}/pen/pattern/${props._id}`);
          if (response.data.id_to_replace) {
            const response2 = await axios.get(`${apiUrl}/pattern/${response.data.id_to_replace}`);
            const bundle = [{pen: response.data, parent: response2.data}];
            setData(bundle);
          } else {
            setData([{pen: response.data}]);
          }
          
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
    <ComparePatternDetail data={data[0]} />
    <Footer /> 
    </div>
  )
}