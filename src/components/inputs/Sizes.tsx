import { Fragment } from "preact/jsx-runtime"
import { row } from "../PatternDetail"

export const Sizes = ({ handleSizeUpdate }) => {
  return (
    <Fragment>
      <tr style={row}>
        <th>
          Sizes
        </th>
        <td className="size-group">
          <div>
            <input type="checkbox" name="XXS" onInput={handleSizeUpdate} />
            <label htmlFor="XXS">XXS</label>
          </div>
          <div>
            <input type="checkbox" name="XS" onInput={handleSizeUpdate} />
            <label htmlFor="XS">XS</label>
          </div>
          <div>
            <input type="checkbox" name="S" onInput={handleSizeUpdate} />
            <label htmlFor="S">S</label>
          </div>
          <div>
            <input type="checkbox" name="M" onInput={handleSizeUpdate} />
            <label htmlFor="M">M</label>
          </div>
          <div>
            <input type="checkbox" name="L" onInput={handleSizeUpdate} />
            <label htmlFor="L">L</label>
          </div>
          <div>
            <input type="checkbox" name="XL" onInput={handleSizeUpdate} />
            <label htmlFor="XL">XL</label>
          </div>
          <div>
            <input type="checkbox" name="XXL" onInput={handleSizeUpdate} />
            <label htmlFor="XXL">XXL</label>
          </div>
          <div>
            <input type="checkbox" name="3XL" onInput={handleSizeUpdate} />
            <label htmlFor="3XL">3XL</label>
          </div>
          <div>
            <input type="checkbox" name="4XL" onInput={handleSizeUpdate} />
            <label htmlFor="4XL">4XL</label>
          </div>
          <div>
            <input type="checkbox" name="5XL" onInput={handleSizeUpdate} />
            <label htmlFor="5XL">5XL</label>
          </div>
          <div>
            <input type="checkbox" name="6XL" onInput={handleSizeUpdate} />
            <label htmlFor="6XL">6XL</label>
          </div>
          <div>
            <input type="checkbox" name="7XL" onInput={handleSizeUpdate} />
            <label htmlFor="7XL">7XL</label>
          </div>
        </td>
    </tr>
    </Fragment>
  )
}