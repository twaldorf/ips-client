import { Fragment } from "preact/jsx-runtime";
import { Title } from "./Title";
import { Footer } from "./Footer";
import { row, table, colStyle, Pattern } from "./PatternDetail"
import { useState } from "preact/hooks";
import { h2Style } from "./PatternList";
import { handleCheckboxUpdate, handleFieldUpdate } from "./utilities/formUtils";
import { apiUrl } from "../config";
import axios from "axios";

export default function InputPattern(props) {
  const [ notionIndexArray, setNotionCount ] = useState([1]);
  const [ form_data, setFormData ] = useState({});
  const [ submit_state, setSubmitState ] = useState("");
  const [ response, setResponse ] = useState("");

  let notion_count = 1;

  const addNotion = () => {
    setNotionCount(() => [...notionIndexArray, notionIndexArray.length]);
  };

  const handleUpdate = e => {
    handleFieldUpdate(e, setFormData, form_data)
  }

  const handleFormatUpdate = (e) => {
    handleCheckboxUpdate(e.target, form_data, "formats");
  }

  const handleSizeUpdate = (e) => {
    handleCheckboxUpdate(e.target, form_data, "sizes");
  }

  const handleNotionUpdate = (e) => {
    if (form_data.notions) {
      form_data.notions[e.target.name] = e.target.value;
    } else {
      form_data['notions'] = [];
      form_data.notions.push(e.target.value);
    }
  }

  const handleFabricReqUpdate = ( e ) => {
    const { value, name } = e.target;
    form_data['fabric_req'] = {
      ...form_data['fabric_req'],
      [name]: parseFloat(value)
    }
    console.log(form_data);
  }
  
  async function Submit(e) {
    e.preventDefault();
    try {
      setSubmitState("loading");
      const response = await axios.post(
        `${apiUrl}/pattern/new`, form_data
      )
      setResponse(response);
    } catch (e) {
      setSubmitState("failure");
    } finally {
      setSubmitState("success");
    }
  }

  if (submit_state == "loading") {
    return (
      <div>
        Loading...
      </div>
    )
  } else if (submit_state == "success") {
    return (
      <div>
        <h2>Success!</h2>
        <p>Your pattern has been successfully submitted for review and addition to the database.</p>
        <p>Below is a preview of your pattern information.</p>
        <p>If you made a mistake, please edit it when the pattern is live.</p>
        <Pattern data={form_data} />
      </div>
    )
  }

  return (
    <div>
      <h2 style={h2StylePlus}>Add a pattern to the database</h2>
      <p>Patterns can be added by anyone. All patterns are checked by peers and validated for safety.
To respect the intellectual property rights of the pattern creators please only include factual information.</p>
      <p>Trying to update an existing pattern? You can use the pattern detail page to update or correct an existing pattern.</p>
      <section className="one-column" style={formBg}>
        { submit_state == "failure" && 
          <div>
            <h3>Pattern submission failure!</h3>
            <p>{response}</p>
          </div>
        }
        <h2>New Pattern Info</h2>
        <form action="" onSubmit={Submit}>
          <table style={table} className="input-table">
            <tr style={row}>
                <th><label htmlFor="name">Pattern Name</label></th>
                <td><input type="text" name="title" onInput={handleUpdate} /></td>
            </tr>
            <tr style={row}>
                <th><label htmlFor="url">Pattern URL</label></th>
                <td><input type="text" name="url" onInput={handleUpdate} /></td>
            </tr>
            <tr style={row}>
                <th><label htmlFor="category">Category</label></th>
                <td>
                  <select name="category" onChange={handleUpdate}>
                    <option value="Garment">Garment</option>
                    <option value="Gear">Gear</option>
                    <option value="Decor">Decor</option>
                    <option value="Other">Other</option>
                  </select>
                </td>
            </tr>
            <tr style={row}>
                <th>
                  <label htmlFor="author">Pattern Designer(s)</label>
                </th>
                <td><input type="text" name="author" onInput={handleUpdate} /></td>
            </tr>
            
            <tr style={row}>
                <th><label htmlFor="desc">Description</label></th>
                <td><textarea type="textbox"  name="desc" onInput={handleUpdate} /></td>
            </tr>
            <tr style={row}>
                <th>
                  Letter Sizes
                  <button>Custom sizes</button>
                </th>
                <td style={sizeRow}>
                  <div>
                    <label htmlFor="XXS">XXS</label> <input type="checkbox" name="XXS" onInput={handleSizeUpdate} />
                  </div>
                  <div>
                    <label htmlFor="XS">XS</label> <input type="checkbox" name="XS" onInput={handleSizeUpdate} />
                  </div>
                  <div>
                    <label htmlFor="S">S</label> <input type="checkbox" name="S" onInput={handleSizeUpdate} />
                  </div>
                  <div>
                    <label htmlFor="M">M</label> <input type="checkbox" name="M" onInput={handleSizeUpdate} />
                  </div>
                  <div>
                    <label htmlFor="L">L</label> <input type="checkbox" name="L" onInput={handleSizeUpdate} />
                  </div>
                  <div>
                    <label htmlFor="XL">XL</label> <input type="checkbox" name="XL" onInput={handleSizeUpdate} />
                  </div>
                  <div>
                    <label htmlFor="XXL">XXL</label> <input type="checkbox" name="XXL" onInput={handleSizeUpdate} />
                  </div>
                  <div>
                    <label htmlFor="3XL">3XL</label> <input type="checkbox" name="3XL" onInput={handleSizeUpdate} />
                  </div>
                  <div>
                    <label htmlFor="4XL">4XL</label> <input type="checkbox" name="4XL" onInput={handleSizeUpdate} />
                  </div>
                  <div>
                    <label htmlFor="5XL">5XL</label> <input type="checkbox" name="5XL" onInput={handleSizeUpdate} />
                  </div>
                  <div>
                    <label htmlFor="6XL">6XL</label> <input type="checkbox" name="6XL" onInput={handleSizeUpdate} />
                  </div>
                  <div>
                    <label htmlFor="7XL">7XL</label> <input type="checkbox" name="7XL" onInput={handleSizeUpdate} />
                  </div>
                </td>
            </tr>
            <tr style={row}>
                <th><label htmlFor="">Fabric Requirements</label></th>
                <td>
                  <label htmlFor="45in">45" wide:</label><input type="number" step=".01" name="45in" onInput={handleFabricReqUpdate}  /> yards
                  <label htmlFor="54in">54"+ wide:</label><input type="number" step=".01" name="54in" onInput={handleFabricReqUpdate}  /> yards
                </td>
            </tr>
            <tr style={row}>
                <th><label htmlFor="1">Notions</label></th>
                <td>
                  <input type="text" placeholder="Notion #1" onChange={addNotion} onInput={handleNotionUpdate} name={`0`} />
                  { notionIndexArray.map((e) => {
                    return <input type="text" placeholder={`Notion #${++notion_count}`} onChange={addNotion} onInput={handleNotionUpdate} name={`${notion_count - 1}`}/> 
                  })}
                </td>
            </tr>
            <tr style={row}>
                <th><label htmlFor="">Format(s)</label></th>
                <td>
                  <div>
                    <label htmlFor="pdf">PDF</label> <input type="checkbox" onInput={handleFormatUpdate} name="pdf" />
                    <label htmlFor="a4">PDF, A4</label> <input type="checkbox" onInput={handleFormatUpdate} name="a4" />
                    <label htmlFor="printed">Printed</label> <input type="checkbox" onInput={handleFormatUpdate} name="printed" />
                    <label htmlFor="projector">Projector</label> <input type="checkbox" onInput={handleFormatUpdate} name="projector" />
                  </div>
                </td>
            </tr>
            <tr style={row}>
                <th><label htmlFor="price">Price</label></th>
                <td><input type="number"  onInput={handleUpdate} name="price" /></td>
            </tr>
            {/* <button>Add a custom property</button> */}
          </table>
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
}

export function Input(props) {
  return <Fragment>
    <Title></Title>
    <InputPattern></InputPattern>
    <Footer></Footer>
    </Fragment>
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