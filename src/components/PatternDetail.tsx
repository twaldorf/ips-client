import { Link } from 'preact-router';
import placeholderImgUrl from '../assets/placeholder.png'

export function Pattern({ data }) {
  console.log(data)
  const { pattern_name, ...data_sans_name } = data;
  const  keys = Object.keys( data_sans_name );

  return (
    <div>
      <h2>{ data.pattern_name }</h2>
      <Link href="/">
        <p>Back to search
        </p> </Link>
      <section>
        <div>
          <img src={`${__S3_URL__}/dps_placeholder.png`} alt="" />
        </div>
        <div>
          <table style={table}>
            { keys.map( ( key ) => {
              return (
                <tr style={row}>
                  <th style={row}>{ key }</th>
                  <td style={row}>{ data_sans_name[key] }</td>
                </tr>
              )
            }) }
          </table>

        </div>
      </section>
    </div>
  )
}

const table = {
  border: '1px solid #dddddd',
  borderCollapse: 'collapse',
  width: '100%',
  textAlign: 'left',
}

const row = {
  padding: '.5rem .75rem',
  border: '1px solid #dddddd',
  verticalAlign: 'left',
}