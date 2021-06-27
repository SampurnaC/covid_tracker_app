import { useState } from "react";

const Search = ({getQuery}) => {
  console.log(getQuery)
  const [text, setText]=useState('')
  const onChange=(q)=>{
    setText(q)
    getQuery(q)
  }
  return (
    <form action="">
      <input type="text" 
      value={text}
      onChange={(e)=>onChange(e.target.value)}
      />
    </form>
  );
}
 
export default Search;