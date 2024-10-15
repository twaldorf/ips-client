import { Fragment } from "preact/jsx-runtime"

export const Fabric = ({ handleFabricReqUpdate }) => {
  return (
    <Fragment>
      <tr>
          <th><label htmlFor="">Fabric</label></th>
          <td>

            <div className="multifill">
              <input type="number" step=".25" name="fabric_1_quantity" onInput={handleFabricReqUpdate}  />
              <select type="category" name="fabric_1_units" onInput={handleFabricReqUpdate}>
                <option value="yards">yards</option>
                <option value="meters">meters</option>
              </select>
              <select name="fabric_1_category" id="fabric_1_category" onInput={handleFabricReqUpdate}>
                <option value="fabric">fabric, 45"+</option>
                <option value="fabric">fabric, 54"+</option>
                <option value="interfacing">interfacing</option>
              </select>
            </div>

            <div className="multifill">
              <input type="number" step=".25" name="fabric_2_quantity" onInput={handleFabricReqUpdate}  />
              <select type="category" name="fabric_2_units" onInput={handleFabricReqUpdate}>
                <option value="yards">yards</option>
                <option value="meters">meters</option>
              </select>
              <select name="fabric_2_category" id="fabric_2_category" onInput={handleFabricReqUpdate}>
                <option value="fabric, 54in">fabric, 54"+</option>
                <option value="fabric, 45in">fabric, 45"+</option>
                <option value="interfacing">interfacing</option>
              </select>
            </div>

            <div className="multifill">
              <input type="number" step=".25" name="fabric_3_quantity" onInput={handleFabricReqUpdate}  />
              <select type="category" name="fabric_3_units" onInput={handleFabricReqUpdate}>
                <option value="yards">yards</option>
                <option value="meters">meters</option>
              </select>
              <select name="fabric_3_category" id="fabric_3_category" onInput={handleFabricReqUpdate}>
                <option value="fabric, 54in">fabric, 54"+</option>
                <option value="fabric, 45in">fabric, 45"+</option>
                <option value="interfacing">interfacing</option>
              </select>
            </div>

          </td>
      </tr>
    </Fragment>
  )
}