import React, { useEffect, useState } from "react";
import List from "./components/List"
import Form from "./components/Form";
import Item from "./components/item";
import Footer from "./components/Footer";

import './Todo.css'
import 'dracula-ui/styles/dracula-ui.css'
import { Heading } from "dracula-ui";

function Todo() {

  const [items, setItems] = useState([]);


  useEffect(() => {
    if (localStorage.items != null) {
      setItems(JSON.parse(localStorage.getItem('items')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  function onAddItem(text) {

    let item = new Item(text)

    setItems([...items, item])
  }

  function onItemDeleted(item) {

    let filtedItems = items.filter(it => it.id !== item.id)

    setItems(filtedItems)
  }

  function onDone(item) {
    let updateItems = items.map(it => {
      if (it.id === item.id) {
        it.done = !item.done
      }
      return it;
    })
    setItems(updateItems);
  }


  return (

    <div id="body">
      <div className="container">
        <header>
          <Heading as="h1" size="2xl">
            TO-DO LIST
          </Heading>
        </header>

        <main>
          <Form onAddItem={onAddItem}></Form>
          <List items={items} onItemDeleted={onItemDeleted} onDone={onDone}></List>
        </main>
      </div>

      <Footer></Footer>

    </div>
  )
}

export default Todo