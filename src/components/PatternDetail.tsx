import { Link } from 'preact-router';
import placeholderImgUrl from '../assets/placeholder.png'
import { s3Url } from '../config';
import { Fragment, render } from 'preact';

const max_depth = 4;

export function Pattern({ data }) {
  const { title, _id, built_image_file, imageUrl, image_file, url, additional_supplies, ...data_sans_name } = data;
  const  keys = Object.keys( data_sans_name );

  const renderRecursiveTable = (key, datum, depth) => {
    if ( depth < max_depth ) {

      const sub_keys = Object.keys( datum );

      if (sub_keys.length > 0 && typeof datum === 'object') {

        const results = sub_keys.map( ( sub_key ) => {
          const sub_datum = datum[ sub_key ];
          return renderRecursiveTable( sub_key, sub_datum, depth++ );
        } );

        const result = (
          <tr style={ row }>
            { isNaN(parseInt(key)) &&
              <th style={ row }>{ key }</th>
            }
            { results.map( ( result ) => result ) }
          </tr>
        );
        return result;

      } else if ( typeof datum != 'object' ) {

        return ( 
          <tr style={row}>
            { isNaN(parseInt(key)) &&
              <th style={ row }>{ key }</th>
            }
            <td style={row}>{ datum }</td>
          </tr>
        );

      }
    }
  }

  return (
    <div>

      <Link href="/" style={link}>
        <p>Back to search
        </p>
      </Link>

      <h2>{ data.title }</h2>
      <h3>{ data.designer }</h3>

      <section className={"two-column"}>
        <div style={colStyle}>
          <img style={img} src={`${s3Url}/${data.built_image_file}`} alt="" />
        </div>
        <div style={colStyle}>
            
          <table style={table}>
            { keys.map( ( key ) => {
              return renderRecursiveTable(key, data[key], 0)
            }) }
          </table>

        </div>
      </section>
    </div>
  )
}

const link = {
  textAlign: 'left'
}

const img = {
  width: '100%',
}

export const colStyle = {
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
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