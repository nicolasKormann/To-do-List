import { Box, Button, Checkbox, Text } from "dracula-ui";
import React from "react"
import '../List.css'
import CardList from "./Card";



function ListItem(props) {

  return (
    <li>
      <CardList className={props.item.done ? "done item" : "item"}>
        <Box>
          <Checkbox className="checkbox" onClick={() => { props.onDone(props.item) }} id="white" color="white" name="white" defaultChecked={false}></Checkbox>
          <Text className="txt-item">
            {props.item.text}
          </Text>
        </Box>

        <Box>
          <Button color="red" onClick={() => { props.onItemDeleted(props.item) }}>Delete</Button>
        </Box>

      </CardList>
    </li>)
}

export default ListItem