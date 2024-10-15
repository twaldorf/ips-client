import { Fragment } from "preact/jsx-runtime"
import { table, row } from "../PatternDetail"
import { Formats } from "./Formats"
import { Fabric } from "./Multifill"
import { Notions } from "./Notions"
import { Price } from "./Price"
import { Sizes } from "./Sizes"

export const InputForm = ( { formPackage } ) => {

  const {
    handleCheckboxUpdate,
    handleEditPattern,
    handleFabricReqUpdate,
    handleFieldUpdate,
    handleFormatUpdate,
    handleNotionUpdate,
    handleSizeUpdate,
    handleUpdate,
    notion_count,
    addNotion,
    notionIndexArray
  } = formPackage

  return (
    <Fragment>
      <table className="input-table">
        <tr>
            <th><label htmlFor="name">Pattern Name</label></th>
            <td><input type="text" name="title" onInput={handleUpdate} /></td>
        </tr>
        <tr>
            <th><label htmlFor="url">Pattern URL</label></th>
            <td><input type="url" name="url" onInput={handleUpdate} /></td>
        </tr>
        <tr>
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
        <tr>
            <th>
              <label htmlFor="author">Pattern Designer(s)</label>
            </th>
            <td><input type="text" name="author" onInput={handleUpdate} /></td>
        </tr>
        <tr>
            <th><label htmlFor="desc">Description</label></th>
            <td><textarea type="textbox"  name="desc" onInput={handleUpdate} /></td>
        </tr>
        <Sizes handleSizeUpdate={handleSizeUpdate} />
        <Fabric handleFabricReqUpdate={handleFabricReqUpdate} />
        <Notions 
          notionIndexArray={notionIndexArray}
          notion_count={notion_count}
          addNotion={addNotion}
          handleNotionUpdate={handleNotionUpdate} />
        <Formats handleFormatUpdate={handleFormatUpdate} />
        <Price handleUpdate={handleUpdate} />
      </table>
    </Fragment>
  )
}