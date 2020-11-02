import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Simple = () => {

const [args, setArgs] = useState([])

useEffect(() => {
axios.get('http://localhost:4000/simple')
.then((res) => {
  setArgs(res.data)
})
.catch((err) => {
  console.log(err);
})
}, [])

  return (
<div>
  <h2>Examples of single arguments</h2>
  {args.map((arg) => (
    <div>
      <h3>Argument:</h3>
      <p>{arg.argument}</p>
      <h3>Untying:</h3>
      <p>{arg.untying}</p>
      <br></br>
    </div>
  ))}
</div>
  )
}

export default Simple