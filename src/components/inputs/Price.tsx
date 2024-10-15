import { Fragment } from "preact/jsx-runtime"
import { row } from "../PatternDetail"

export const Price = ({ handleUpdate }) => {
  return (
    <Fragment>
         <tr style={row}>
          <th><label htmlFor="price">Price</label></th>
          <td>
            <div className="row">
              <span id="currency_character">$</span>
              <input type="number"  onInput={handleUpdate} name="price" />
              <select name="currency" id="currency_dropdown">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            </td>
        </tr>
    </Fragment>
  )
}