import { Fragment } from "preact/jsx-runtime"

export const Formats = ({ handleFormatUpdate }) => {
  return (
    <Fragment>
      <tr>
        <th><label htmlFor="">Format(s)</label></th>
        <td className="grid format-group">
          <div>
            <label htmlFor="pdf">PDF</label> <input type="checkbox" onInput={handleFormatUpdate} name="pdf" />
          </div>
          <div>
            <label htmlFor="a4">PDF, A4</label> <input type="checkbox" onInput={handleFormatUpdate} name="a4" />
          </div>
          <div>
            <label htmlFor="printed">Printed</label> <input type="checkbox" onInput={handleFormatUpdate} name="printed" />
          </div>
          <div>
            <label htmlFor="projector">Projector</label> <input type="checkbox" onInput={handleFormatUpdate} name="projector" />
          </div>
        </td>
      </tr>
    </Fragment>
  )
}