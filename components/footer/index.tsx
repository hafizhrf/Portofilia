import React from 'react'
import styled from 'styled-components'

const BottomFooter = styled.div`
  // width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px 8px;
  background: #f8e775;
  color: #000;
  font-family: Inter;
  font-size: 14px;
`

const Footer = (): React.ReactElement => {
  return (
    <>
      <BottomFooter>Made By Hafizh Rifqi Fabian | Powered by Sanity.io</BottomFooter>
    </>
  )
}

export default Footer
