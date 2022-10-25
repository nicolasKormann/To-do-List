import { Anchor, Text } from "dracula-ui"
import React from "react"


function Footer() {
  return (
    <footer>
      <Text size="lg">
      Made with <span id="heart">♥</span> by <Anchor size="lg" color="green" hoverColor="green" isExternal={true} href="https://github.com/nicolasKormann" target="blank">Nícolas Kormann</Anchor>
      </Text>   
      
      
    </footer>
  )
}

export default Footer