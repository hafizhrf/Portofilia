import React from 'react'
import styled from 'styled-components'
import Menu from './menu'

const Content = styled.div`
  flex: 1;
  margin-top: 72px;
  margin-left: auto;
  font-family: Inter;
  margin-right: auto;
  padding-top: 20px;
  min-height: calc(100vh - 100px);
  overflow: hidden;

  @media (max-width: 576px) {
    max-width: 440px;
  }

  @media (min-width: 768px) {
    max-width: 640px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

interface Props {
  children: unknown
}

const Index = ({ children }: Props): React.ReactElement => {
  return (
    <>
      <Menu />
      <Content>{children}</Content>
    </>
  )
}

export default Index
