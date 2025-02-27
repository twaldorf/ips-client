import { Fragment } from "preact/jsx-runtime";
import { Title } from "./Title";
import { Footer } from "./Footer";
import { row, table, colStyle } from "./PatternDetail"
import { useEffect, useState } from "preact/hooks";
import { h2Style } from "./PatternList";
import axios from "axios";
import { apiUrl } from "../config";
import { buttonRefine } from "../styles/buttons";
import { noteBubble } from "../styles/bubbles";
import { handleFieldUpdate } from "./utilities/formUtils";
import { apiInstance } from "./auth/Api";

export function EditPattern(props) {
  const { id } = props;
  const [ notionIndexArray, setNotionCount ] = useState([1]);
  const [data, setData] = useState([]);
  const [ formdata, setFormData ] = useState({
    ...data
  })

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`${apiUrl}/pattern/${id}`);
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

  async function Submit() {
    try {
      setLoading(true);
      const response = await apiInstance.post(
        `${apiUrl}/pattern/update?_id=${id}`, data
      )
      console.log(response)
    } catch (e) {
      setError("error sending pattern update")
    } finally {
      setLoading(false);
      setSuccess(true);
    }
  }

  let notion_count = 2;

  const addNotion = () => {
    console.log('update')
    setNotionCount(
      () => [...notionIndexArray, notionIndexArray.length])
  };

  const handleUpdate = (e) => {
    handleFieldUpdate(e, setFormData, formdata)
    setData({...data, ...formdata})
  }

  if (success) {
    return (
      <Fragment>
        <h2 style={h2StylePlus}>Update a pattern</h2>
        <section className="one-column" style={formBg}>

          <div style={noteBubble} className={"accent"}>
            <h3>Success!</h3>
            <p>Your edits have been added to the review queue for safety. Thanks for contributing.</p>
          </div>
        </section>
      </Fragment>
    )
  }

  return (
    <div>
      <h2 style={h2StylePlus}>Update a pattern</h2>
      <section className="one-column" style={formBg}>
        <h2>{ data.title || "untitled pattern" }</h2>
        <form action="" onSubmit={Submit}>
          <table style={ editTable } className="edit-table">
            { Object.keys(data).map( key => {
              return (
                <tr>
                  <th>{ key }</th>
                  { key != 'fabric_req' && 
                    <textarea 
                      type="text" 
                      name={ key } 
                      defaultValue={ data[ key ] } 
                      style={ fieldStyle }
                      onInput={ handleUpdate }
                      readOnly={ key == '_id' || key == 'built_image_file' }
                    />
                  }
                </tr>
              )
            } ) }
          </table>
          <div>
            <button style={ buttonRefine } disabled={success}>Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default function Edit(props) {
  return <Fragment>
    <Title></Title>
    <EditPattern id={props.id}></EditPattern>
    <Footer></Footer>
    </Fragment>
}

const editItem = {
  ...row,
  borderBottom: 'none',
  border: '1px solid black',
  margin: 'auto auto',
  padding: '2rem',
  backgroundColor: 'white',
  height: 'auto',
}

const fieldStyle = {
  width: 'var(--solo-col-width)',
  padding: '0 1rem',
  margin: 'auto',
  minHeight: '4rem',
  border: 'none',
  background: 'white',
}

const editTable = {
  ...table,
  spacing: '0px',
}

const formBg = {
  borderRadius: "12px",
  padding: "2rem",
  width: "100%",
  backgroundColor: "var(--bg-inset)",
}

const sizeRow = {
  display: "flex",
  flexDirection: 'row',
  justifyContent: "space-between",
  flexWrap: 'wrap',
  border: 'none',
}

const h2StylePlus = {
  ...h2Style,
  marginTop: '0',
}
