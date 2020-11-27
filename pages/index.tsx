import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { TitleText, MutedText } from '../components/text/index.styled'
import styled from 'styled-components'

import Bio from '../components/bio'
import Skills from '../components/skills'

const HiSection = styled.div`
  margin: 32px 0;

  @media (max-width: 992px) {
    margin: 0 0 32px;
  }
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
      <Bio text="I am a web programmer from Indonesia who really likes doing new things, I really like playing games or watching anime, still looking for experiences. Nice to meet you!" />
      <Skills />
    </Layout>
  )
}
