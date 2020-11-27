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
    font-size: 10px;
  }
`

interface Props {
  text: string
}

const SectionTitle = ({ text }: Props): React.ReactElement => {
  return (
    <>
      <BioContainer>{text}</BioContainer>
    </>
  )
}

export default SectionTitle
