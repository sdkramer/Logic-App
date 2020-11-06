import React, { useState } from 'react';
import axios from 'axios';



const initialAddArg = {
  // kind_id: '',
  argument: '',
  untying: ''
}
 

const AddForm = ({args, setArgs}) => {

  const [addArg, setAddArg] = useState(initialAddArg);

  const changeHandler = e => {
    e.persist();
    console.log(e.target);
    setAddArg({
      ...addArg,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log('addArg: ', addArg);
    axios.post('http://localhost:4000/simple', addArg)
    .then((res) => {
      console.log('add arg res: ', res)
    })
    .catch((err) => {console.log(err)})
  }

  return (
<div className='form'>

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

</div>
  
  )
}

export default AddForm;