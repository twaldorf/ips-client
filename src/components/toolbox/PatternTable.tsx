import axios from "axios";
import { apiUrl } from "../../config";

export const PatternTable = ({ data }) => {
  return (
    <div>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Pattern</th>
            <th style={tableHeaderStyle}>Category</th>
            <th style={tableHeaderStyle}>Tags</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => (
            console.log(element),
            <tr key={element.id}>
              <td style={tableCellStyle}>{element.title}</td>
              <td style={tableCellStyle}>{element.category}</td>
              <td style={tableCellStyle}>{element.designer}</td>
              <a href={`/edit/${element._id}`}> <button>Edit</button></a>
              <button onClick={() => {deletePattern(`${apiUrl}/patterns/delete/${element._id}`)}}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const callDelete = (e) => {
  const url = e.target.name;
  deletePattern(url);
}

const deletePattern = async (url) => {
  try {
    const response = await axios.delete(url);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

const tableHeaderStyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '10px',
  textAlign: 'left',
}

const tableCellStyle = {
  padding: '10px',
  borderBottom: '1px solid #dddddd',
}