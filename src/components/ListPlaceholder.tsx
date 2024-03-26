export const ListPlaceholder = () => {
  let n = Array(9);
  return (
   <section>
    <div style={plBlock}></div>
    <div style={plBlock}></div>
    <div style={plBlock}></div>
    <div style={plBlock}></div>
    <div style={plBlock}></div>
    <div style={plBlock}></div>
    <div style={plBlock}></div>
    <div style={plBlock}></div>
    <div style={plBlock}></div>
   </section>
  );
}

const plBlock = {
  width: '100%',
  backgroundColor: '#eee',
  height: '200px',
  margin: '1rem 0',
  borderRadius: '1rem'
}