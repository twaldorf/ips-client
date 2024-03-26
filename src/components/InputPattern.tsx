import { Fragment } from "preact/jsx-runtime";
import { Title } from "./Title";
import { Footer } from "./Footer";
import { row, table, colStyle } from "./PatternDetail"
import { useState } from "preact/hooks";
import { h2Style } from "./PatternList";

export default function InputPattern(props) {
  const [ notionIndexArray, setNotionCount ] = useState([1]);

  let notion_count = 2;

  const addNotion = () => {
    console.log('update')
    setNotionCount(
      () => [...notionIndexArray, notionIndexArray.length])
  };


  return (
    <div>
      <h2 style={h2StylePlus}>Add a pattern to the database</h2>
      <p>Patterns can be added by anyone. All patterns are checked by peers and validated for safety.
To respect the intellectual property rights of the pattern creators please only include factual information.</p>
      <p>Trying to update an existing pattern? You can use the pattern detail page to update or correct an existing pattern.</p>
      <section className="one-column" style={formBg}>
        <h2>New Pattern Info</h2>
        <form action="">
          <table style={table} className="input-table">
            <tr style={row}>
                <th><label htmlFor="">Pattern Name</label></th>
                <td><input type="text" /></td>
            </tr>
            <tr style={row}>
                <th>
                  <label htmlFor="">Pattern Designer(s)</label>
                </th>
                <td><input type="text" /></td>
            </tr>
            <tr style={row}>
                <th><label htmlFor="">Description</label></th>
                <td><textarea type="textbox" /></td>
            </tr>
            <tr style={row}>
                <th>
                  <label htmlFor="">Letter Sizes</label>
                  <button>Custom sizes</button>
                </th>
                <td style={sizeRow}>
                  <div>
                    <label htmlFor="">XXS</label> <input type="checkbox"/>
                  </div>
                  <div>
                    <label htmlFor="">XS</label> <input type="checkbox"/>
                  </div>
                  <div>
                    <label htmlFor="">S</label> <input type="checkbox"/>
                  </div>
                  <div>
                    <label htmlFor="">M</label> <input type="checkbox"/>
                  </div>
                  <div>
                    <label htmlFor="">L</label> <input type="checkbox"/>
                  </div>
                  <div>
                    <label htmlFor="">XL</label> <input type="checkbox"/>
                  </div>
                  <div>
                    <label htmlFor="">XXL</label> <input type="checkbox"/>
                  </div>
                  <div>
                    <label htmlFor="">3XL</label> <input type="checkbox"/>
                  </div>
                  <div>
                    <label htmlFor="">4XL</label> <input type="checkbox"/>
                  </div>
                  <div>
                    <label htmlFor="">5XL</label> <input type="checkbox"/>
                  </div>
                  <div>
                    <label htmlFor="">6XL</label> <input type="checkbox"/>
                  </div>
                  <div>
                    <label htmlFor="">7XL</label> <input type="checkbox"/>
                  </div>
                </td>
            </tr>
            <tr style={row}>
                <th><label htmlFor="">Fabric Requirements</label></th>
                <td>
                  <label htmlFor="input">45" wide:</label><input type="number" /> yards
                  <label htmlFor="input">54"+ wide:</label><input type="number" /> yards
                </td>
            </tr>
            <tr style={row}>
                <th><label htmlFor="">Notions</label></th>
                <td>
                  <input type="text" placeholder="Notion #1" onChange={addNotion}/>
                  { notionIndexArray.map((e) => {
                    return <input type="text" placeholder={`Notion #${notion_count++}`} onChange={addNotion}/> 
                  })}
                </td>
            </tr>
            <tr style={row}>
                <th><label htmlFor="">Format(s)</label></th>
                <td>
                  <div>
                    <label htmlFor="">PDF</label> <input type="checkbox"/>
                    <label htmlFor="">PDF, A4</label> <input type="checkbox"/>
                    <label htmlFor="">Printed</label> <input type="checkbox"/>
                    <label htmlFor="">Projector</label> <input type="checkbox"/>
                  </div>
                </td>
            </tr>
            <tr style={row}>
                <th><label htmlFor="">Price</label></th>
                <td><input type="number" /></td>
            </tr>
            <button>Add a custom property</button>
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

function Submit() {
  return "yay"
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