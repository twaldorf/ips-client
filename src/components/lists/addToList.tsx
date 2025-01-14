import { apiInstance } from "../auth/Api"

export const AddToList = ({ patternId, list=undefined }) => {
  // todo: check if user is logged in
  const onClick = async () => {
    await apiInstance.post(
      '/user/list', 
      { pattern_id: patternId }, 
      { withCredentials : true,
      headers: {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': 'http://localhost:8000'} 
      }).then((res => console.log(res))).catch(e => console.log(e))   
  }

  return (
    <button onClick={onClick}>Save Pattern</button>
  )
}