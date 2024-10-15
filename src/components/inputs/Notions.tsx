import { Fragment } from "preact/jsx-runtime"

export const Notions = ({ addNotion, handleNotionUpdate, notionIndexArray, notion_count }) => {
  return (
    <Fragment>
      <tr>
        <th><label htmlFor="1">Notions</label></th>
          <td>
            <input className="thin-input" type="text" placeholder="Notion #1" onChange={addNotion} onInput={handleNotionUpdate} name={`0`} />
            { notionIndexArray.map((e) => {
              return <input type="text" placeholder={`Notion #${++notion_count}`} onChange={addNotion} onInput={handleNotionUpdate} name={`${notion_count - 1}`}/> 
            })}
          </td>
      </tr>
    </Fragment>
  )
}