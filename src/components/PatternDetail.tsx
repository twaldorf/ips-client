import { Link } from 'preact-router';
import placeholderImgUrl from '../assets/placeholder.png'
import { s3Url } from '../config';
import { Fragment, render } from 'preact';
import { addPattern } from './addPatternHook';
import { noteBubble } from '../styles/bubbles';
import { buttonRefine } from '../styles/buttons';
import { AddToList } from './lists/AddToList';

const max_depth = 4;

export function Pattern({ data }) {
  const { title, _id, built_image_file, imageUrl, image_file, url, additional_supplies, ...data_sans_name } = data;
  const keys = Object.keys( data_sans_name );

  const generic_pattern = {title: data.title}

  const handleEditPattern = () => {
    // addPattern(generic_pattern);
  }

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
              <th style={ thRow }>{ key }</th>
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
        <p>&larr; Back to search
        </p>
      </Link>

      <h2>{ data.title }</h2>
      <h3>{ data.designer }</h3>
      <AddToList patternId={_id}></AddToList>

      <section className={"two-column"}>
        <div style={colStyle}>
          { data.built_image_file ?
            <img style={img} src={`${s3Url}/${data.built_image_file}`} alt="" /> 
            : <img style={img} src={`${s3Url}/${data.image_name}`} alt="" />}
        </div>
        <div style={colStyle}>
          <div style={{...wrapAnywhere, ...noteBubble}}>
            <label for="pattern-url"><h4 className="accent">Link to pattern</h4></label>
            <a className="accent" id="pattern-url" href={url}>{url}</a>
          </div>
          <table style={table}>
            { keys.map( ( key ) => {
              return renderRecursiveTable(key, data[key], 0)
            }) }
          </table>
          { data._id && 
            <a href={`/edit/${data._id}`}><button style={editButton} onClick={handleEditPattern}>Edit pattern</button></a>
          } 
        </div>
      </section>
    </div>
  )
}

const link = {
  textAlign: 'left',
}

export const wrapAnywhere = {
  wordWrap: 'anywhere'
}

const img = {
  width: '100%',
}

const editButton = {
  ...buttonRefine,
  marginTop: '1rem',
}

export const colStyle = {
  width: '100%',
}

export const table = {
  border: '1px solid #dddddd',
  borderCollapse: 'collapse',
  width: '100%',
  textAlign: 'left',
  tableLayout: 'fixed',
  wordWrap: 'break-word',
  fontSize: '.8rem',
}

export const row = {
  padding: '.5rem .75rem',
  border: '1px solid #dddddd',
  verticalAlign: 'left',
}

export const thRow = {
  ...row,
  maxWidth: '30%'
}