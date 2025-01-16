import { Fragment } from "preact/jsx-runtime"
import { Title } from "../Title"
import { UserContext } from "./UserContext"
import { useContext, useEffect, useState } from "preact/hooks"
import { apiInstance } from "../auth/Api"
import { PatternList } from "../PatternList"
import { ListPatternInfo } from "../ListPatternInfo"
import { Pattern } from "../ListPattern"
import { PatternListManager } from "../PatternListManager"
import { Footer } from "../Footer"

export const Profile = (props:unknown) => {
  const username = props.username;
  const [ patternData, setPatterns ] = useState(undefined);

  const getpd = () => {
    apiInstance.get(`/user/likes?username=${username}`)
    .then((res) => {
      console.log(res.data);
      setPatterns(res.data.data);
    })
    .catch(e => console.log(e));
  }

  useEffect(getpd, []);

  return (
    <Fragment>
      <Title></Title>
      <h2>User: {username}</h2>
      { patternData && 
        <PatternList
        data={patternData}
        category={undefined} 
        filters={undefined}
        page={undefined} 
        count={patternData.length}
        metadata={undefined} 
        limit={undefined} 
        setPage={undefined}>

        </PatternList>
      }
      <Footer></Footer>

    </Fragment>
  )
}