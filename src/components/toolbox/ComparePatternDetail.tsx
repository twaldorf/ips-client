import { Link } from 'preact-router';
import { buttonRefine } from '../../styles/buttons';
import axios from 'axios';
import { apiUrl } from '../../config';

export function ComparePatternDetail({ data }) {

  const handleApprovePattern = () => {
    axios.post(`${apiUrl}/approve/${data.pen._id}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  const handleDenyPattern = () => {
    axios.delete(`${apiUrl}/pen/${data.pen._id}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>

      <Link href="/toolbox" style={link}>
        <p>&larr; Back to pen
        </p>
      </Link>

      <h2>Diff Check</h2>
      <h3>Parent on left, pending change on right</h3>

      <section className={"two-column"}>
        <div style={colStyle}>
        { 'parent' in data &&
          Object.keys(data.parent).map((key, index) => {
              return <pre style={preStyle}>{key}: {JSON.stringify(data.parent[key], null, 2)}</pre>
            })
        }
        </div>
        <div style={colStyle}>
          { Object.keys(data.pen).map((key, index) => {
            if (key != 'id_to_replace' && data.parent) {
              return JSON.stringify(data.pen[key]) == JSON.stringify(data.parent[key]) ? 
                <pre style={preStyle}>{key}: {JSON.stringify(data.pen[key], null, 2)}</pre> : 
                <pre style={preDifStyle}>{key}: {JSON.stringify(data.pen[key], null, 2)}</pre>;
            } else {
              return <pre style={preStyle}>{key}: {JSON.stringify(data.pen[key], null, 2)}</pre>; 
            };
          })}
        </div>
        <button onClick={handleApprovePattern}>Approve change</button>
        <button onClick={handleDenyPattern}>Delete change</button>
      </section>
    </div>
  )
}

const link = {
  textAlign: 'left'
}

export const colStyle = {
  width: '100%',
}

export const table = {
  border: '1px solid #dddddd',
  borderCollapse: 'collapse',
  width: '100%',
  textAlign: 'left',
}

export const row = {
  padding: '.5rem .75rem',
  border: '1px solid #dddddd',
  verticalAlign: 'left',
}

const preStyle = {
  textWrapMode: 'wrap',
  lineHeight: '1.2rem',
  marginBottom: '2rem',
  borderRadius: '4px',
  padding: '2px',
}

const preDifStyle = {
  ...preStyle,
  backgroundColor: 'var(--accent-text)',
  color: 'white',
}