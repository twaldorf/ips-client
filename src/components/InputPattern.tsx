import { Fragment } from "preact/jsx-runtime";
import { Title } from "./Title";
import { Footer } from "./Footer";
import { row, colStyle, Pattern } from "./PatternDetail"
import { useState } from "preact/hooks";
import { h2Style } from "./PatternList";
import { handleCheckboxUpdate, handleFieldUpdate } from "./utilities/formUtils";
import { apiUrl } from "../config";
import axios from "axios";
import { Formats } from "./inputs/Formats";
import { Notions } from "./inputs/Notions";
import { Price } from "./inputs/Price";
import { Fabric } from "./inputs/Multifill";
import { Sizes } from "./inputs/Sizes";
import { InputForm } from "./inputs/InputForm";
import { buttonRefine } from "../styles/buttons";

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
    if (parseFloat(value)) {
      form_data['fabric_req'] = {
        ...form_data['fabric_req'],
        [name]: parseFloat(value)
      }
    } else {
      form_data['fabric_req'] = {
        ...form_data['fabric_req'],
        [name]: value
      } 
    }
    console.log(form_data);
  }

  const formPackage = {
    handleCheckboxUpdate,
    handleFabricReqUpdate,
    handleNotionUpdate,
    handleSizeUpdate,
    handleFormatUpdate,
    handleUpdate,
    addNotion,
    notion_count,
    notionIndexArray
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
        <h2>New pattern</h2>
        <form action="" onSubmit={Submit}>
          <InputForm formPackage={formPackage} />
          <button style={buttonRefine} className="form-button">Submit</button>
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

const table = {
  border: "none",
}

const formBg = {
  borderRadius: "12px",
  padding: "1.2rem 2rem 2rem 2rem",
  width: "100%",
  border: "1px solid #EDEDED",
  marginTop: "2rem"
}

const h2StylePlus = {
  ...h2Style,
  marginTop: '0',
}