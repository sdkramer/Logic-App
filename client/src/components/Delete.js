import React from 'react';
import axios from 'axios';




const Delete = ({args}) => {

  const deleteArg = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:4000/simple/${args.id}`)
    .then((res) => {
      console.log('delete res: ', res);
    })
    .catch((err) => {
      console.log('del err:', err);
    })
    }

  return (
    <>
<button onClick={deleteArg} >
  Delete
</button>
    </>

  )
}

export default Delete;