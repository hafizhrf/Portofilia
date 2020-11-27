import React from 'react'
import styled from 'styled-components'
import { TitleText } from '../text/index.styled'

const TitleDecor = styled.div`
  position: absolute;
  left: 0;
  bottom: -12px;
  height: 4px;
  width: 64px;
  transition: ease 0.1s;
  background: #73eefd;
`

const SkillTitle = styled.div`
  margin: 80px 0 32px;

  &:hover ${TitleDecor} {
    left: 24px;
  }
`

interface Props {
  text: string
}

const SectionTitle = ({ text }: Props): React.ReactElement => {
  return (
    <>
      <SkillTitle>
        <div style={{ position: 'relative' }}>
          <TitleText fontSize="24px">{text}</TitleText>
          <TitleDecor />
        </div>
      </SkillTitle>
    </>
  )
}

export default SectionTitle
