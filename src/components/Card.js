import { Card } from "dracula-ui";
import React from "react";

function CardList(props){
  return <Card className={ props.className ? `${props.className} card` : "card" }>
    {props.children}
  </Card>
}

export default CardList