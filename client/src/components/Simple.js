import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddForm from './AddForm'




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

// const changeHandler = e => {
//   e.persist();
//   console.log(e.target);
//   setAddArg({
//     ...addArg,
//     [e.target.name]: e.target.value
//   })
// }

// const handleSubmit = e => {
//   e.preventDefault();
//   console.log('addArg: ', addArg);
//   axios.post('http://localhost:4000/simple', addArg)
//   .then((res) => {
//     console.log('add arg res: ', res)
//   })
//   .catch((err) => {console.log(err)})
// }

  return (
<div className='container'>

  <div className='examples'>
  <h2>Examples of single arguments</h2>
  {args.map((arg) => (
    <div>
      <h3>Argument:</h3>
      <p>{arg.argument}</p>
      <h3>Untying:</h3>
      <p>{arg.untying}</p>
      
    </div>
  ))}
  </div>

  <AddForm args={args} setArgs={setArgs}/>

  {/* <div className='form'>

<form onSubmit={handleSubmit}>
    <h2>Add an argument:</h2>

<h4>Kind of argument:</h4>
<input type="radio" id="example" name="kind_id" value='1' onChange={changeHandler} />
  <label for="example">Example</label>
  <br />
  <input type="radio" id="induction" name="kind_id" value="2" onChange={changeHandler} />
  <label for="induction">Induction</label>
  <br />
  <input type="radio" id="enthymeme" name="kind_id" value="3" onChange={changeHandler} />
  <label for="enthymeme">Enthymeme</label>
  <br />
  <input type="radio" id="syllogism" name="kind_id" value="4" onChange={changeHandler} />
  <label for="syllogism">Syllogism</label>
  <br />



<label for='argument'>Argument: </label>
<br />
    <textarea name='argument' rows='8' cols='80' onChange={changeHandler} placeholder='Argument' value={args.argument} />
    <br />
    <label for='untying'>Logical form: </label>
    <br />
    <textarea name='untying' rows='8' cols='80' onChange={changeHandler} placeholder='Analysis of the argument' value={args.untying} />
    <br />

    
    <button>Submit</button>

  </form>

</div> */}
  
</div>
  )
}

export default Simple