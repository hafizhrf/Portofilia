import React from 'react'
import styled from 'styled-components'
import Menu from './menu'
import Container from '@material-ui/core/Container'

const Root = styled.div`
  background-color: #3b3b3b;
`

const Content = styled(Container)`
  flex: 1;
  margin-left: auto;
  font-family: Inter;
  margin-right: auto;
  padding-top: 64px;
  min-height: calc(100vh);
  color: white;
  margin-bottom: 0 !important;
`

interface Props {
  children: unknown
}

const Index = ({ children }: Props): React.ReactElement => {
  return (
    <Root>
      <Menu />
      <Content>{children}</Content>
    </Root>
  )
}

export default Index
