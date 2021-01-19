import React from 'react'
import styled from 'styled-components'

const BioContainer = styled.div`
  width: 600px;
  margin-top: 24px;
  padding: 20px 16px;
  font-size: 14px;
  background: #4f4f4f;
  color: white;
  border-radius: 8px;

  @media (max-width: 992px) {
    width: 80%;
    font-size: 12px;
  }
`

interface Props {
  children?: unknown
}

const SectionTitle = ({ children }: Props): React.ReactElement => {
  return (
    <>
      <BioContainer>{children}</BioContainer>
    </>
  )
}

export default SectionTitle
