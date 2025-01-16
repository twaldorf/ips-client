import { apiInstance } from "../auth/Api"
import { h } from 'preact';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserContext } from "../user/UserContext";
import { useContext, useEffect, useState } from "preact/hooks";

export const AddToList = ({ patternId, list=undefined }) => {
  const { user, setUser } = useContext(UserContext);

  // Bail if the user is not logged in
  if (!user) {
    return;
  }

  const [ hover, setHover ] = useState(false);
  
  const checkLists = () => {
    return user.lists ? Object.keys(user.lists).map((listKey) => {
      return user.lists[listKey].includes(patternId);
    }).find((r) => r == true) : false
  }
  
  const [ saved, setSaved ] = useState(checkLists());

  useEffect(() => {
    setSaved(checkLists());
  }, [user]);

  const mouseOn = () => {
    setHover(true);
  }
  
  const mouseOff = () => {
    setHover(false);
  }

  // todo: check if user is logged in
  const onClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    await apiInstance.post(
      '/user/list', 
      { pattern_id: patternId }, 
      { withCredentials : true,
      headers: {
        'Content-Type': 'application/json'} 
      })
      .then((res => {
        const data = res.data.data;
        if (data["My List"].includes(patternId)) {
          setSaved(true);
        }
        setUser(u => ({...u, lists: data}));
      }))
      .catch(e => console.log(e));
  }

  return (
    <button onClick={onClick} onMouseEnter={mouseOn} onMouseLeave={mouseOff} style={heartButton}>
      <Heart saved={saved} hover={hover}></Heart>
    </button>
  )
}

const Heart = ({ saved, hover }) => {
  if (saved) return <FaHeart color="red" size={24} />;

  if (!hover) return <FaRegHeart color="white" size={24} />;

  return <FaHeart color="white" size={24} />;
}

const heartButton = {
  border: 'none',
  background: 'none',
  position: 'absolute',
  right: '.6rem',
  bottom: '.6rem',
  cursor: 'pointer'
}