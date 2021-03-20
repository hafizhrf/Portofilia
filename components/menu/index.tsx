import React, { useEffect, useState } from 'react'
import { MenuOverlay, MenuContainer, MenuContent, ContentButton } from './index.styled'
import MenuIcon from '@material-ui/icons/Menu'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import CloseIcon from '@material-ui/icons/Close'
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles, Theme } from '@material-ui/core/styles'

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip)

const Menu = (): React.ReactElement => {
  const [visibility, setVisibility] = useState(false)
  const [onBottom, setBottom] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        Math.round(window.scrollY + window.innerHeight) + 40 >=
        document.querySelector('html').scrollHeight
      ) {
        setBottom(true)
      } else {
        setBottom(false)
      }
    })
  })

  const toggleVisibility = (): void => {
    setVisibility(!visibility)
  }

  const redirectTo = (url: string): void => {
    window.open(url, '_blank')
  }

  return (
    <>
      <MenuContainer onBottom={onBottom} />
      <MenuOverlay onBottom={onBottom} onClick={toggleVisibility}>
        {visibility ? <CloseIcon /> : <MenuIcon />}
      </MenuOverlay>
      <MenuContent onBottom={onBottom}>
        <LightTooltip title="Github">
          <ContentButton
            onClick={() => redirectTo('https://github.com/hafizhrf')}
            visibility={visibility}
          >
            <GitHubIcon />
          </ContentButton>
        </LightTooltip>
        <LightTooltip title="LinkedIn">
          <ContentButton
            onClick={() => redirectTo('https://www.linkedin.com/in/hafizhrf')}
            visibility={visibility}
          >
            <LinkedInIcon />
          </ContentButton>
        </LightTooltip>
        <LightTooltip title="Email (hafizhrf@yahoo.com)">
          <ContentButton
            onClick={() => redirectTo('mailto:hafizhrf@yahoo.com')}
            visibility={visibility}
          >
            <EmailIcon />
          </ContentButton>
        </LightTooltip>
      </MenuContent>
    </>
  )
}

export default Menu
