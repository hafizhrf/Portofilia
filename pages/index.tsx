import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { TitleText, MutedText } from '../components/text/index.styled'
import styled from 'styled-components'

import Skills from '../components/skills'

const HiSection = styled.div`
  margin: 32px 0;
`

export default function Home(): React.ReactElement {
  return (
    <Layout>
      <Head>
        <title>Hafizh RF</title>
      </Head>
      <HiSection>
        <MutedText>Hi, my name is</MutedText>
      </HiSection>
      <TitleText>Hafizh Rifqi Fabian</TitleText>
      <Skills />
    </Layout>
  )
}
