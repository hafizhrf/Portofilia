import React from 'react'
import { MenuOverlay, MenuContainer } from './index.styled'
import MenuIcon from '@material-ui/icons/Menu'

const Menu = (): React.ReactElement => {
  return (
    <>
      <MenuContainer />
      <MenuOverlay>
        <MenuIcon />
      </MenuOverlay>
    </>
  )
}

export default Menu
