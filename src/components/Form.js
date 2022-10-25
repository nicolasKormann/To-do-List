import { Button, Input } from "dracula-ui";
import React, { useState, useRef } from "react"

function Form(props) {

  const input = useRef(null);
  const [text, setText] = useState("")

  function hadleChange(event) {
    let inputText = event.target.value;
    setText(inputText)
  }

  function addItem(event) {
    event.preventDefault()
    if (text) {
      props.onAddItem(text)
      setText('')
      input.current.focus();
    }
  }
  

  return (
    <form>
      <Input ref={input} color="purple" size="lg" placeholder="Add a task" type='text' onChange={hadleChange} value={text} autoFocus></Input>
      <Button type="submit" as="button" size="lg" onClick={addItem}>Add</Button>
    </form>
  )
}

export default Form