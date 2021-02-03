import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { TitleText, MutedText } from '../components/text/index.styled'
import styled from 'styled-components'

import Bio from '../components/bio'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Footer from '../components/footer'

const HiSection = styled.div`
  margin: 32px 0;

  @media (max-width: 992px) {
    margin: 0 0 32px;
  }
`

export default function Home(): React.ReactElement {
  return (
    <div>
      <Layout>
        <Head>
          <title>Hafizh RF</title>
        </Head>
        <HiSection>
          <MutedText>Hi, my name is</MutedText>
        </HiSection>
        <TitleText>Hafizh Rifqi Fabian</TitleText>
        <Bio>
          <div>
            <p>
              I am a frontend developer from Indonesia, I usually use ReactJs with typescript to
              develop an application.
            </p>

            <p>
              I always pay attention to the code structure so that it is easy to maintain & looks
              neat, I have a high dedication to work and am very used to working in a team. My
              experience has been almost two years working as a frontend developer, although I still
              want to find new experiences
            </p>
          </div>
        </Bio>
        <Skills />
        <Projects />
      </Layout>
      <Footer />
    </div>
  )
}
