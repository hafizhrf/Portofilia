import React from 'react'
import SectionTitle from '../section/sectionTitle'
import StarIcon from '@material-ui/icons/Star'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

interface Star {
  fontColor?: string
}

const Star = styled(StarIcon)`
  margin-right: 8px;
  margin-left: -4px;
  color: ${(props: Star) => props.fontColor || 'white'};

  @media (max-width: 992px) {
    font-size: 16px !important;
    margin-left: -2px;
  }
`

const SkillTitle = styled.div`
  margin: 20px 0 10px;
`

const RenderStar = (rating: number, defaultColor = '#73eefd'): React.ReactElement[] => {
  const stars = []
  for (let i = 0; i < 10; i++) {
    if (i < rating) {
      stars.push(<Star fontColor={defaultColor} />)
    } else {
      stars.push(<Star />)
    }
  }
  return stars
}

const Skills = (): React.ReactElement => {
  return (
    <>
      <SectionTitle text="skills" />
      <Grid container spacing={2}>
        <Grid item lg={4}>
          <div>
            <SkillTitle>HTML</SkillTitle>
          </div>
          <div>{RenderStar(10)}</div>

          <div>
            <SkillTitle>CSS</SkillTitle>
          </div>
          <div>{RenderStar(8)}</div>

          <div>
            <SkillTitle>Javascript</SkillTitle>
          </div>
          <div>{RenderStar(9)}</div>

          <div>
            <SkillTitle>Typescript</SkillTitle>
          </div>
          <div>{RenderStar(6)}</div>
        </Grid>
        <Grid item lg={4}>
          <div>
            <SkillTitle>PHP</SkillTitle>
          </div>
          <div>{RenderStar(8, '#f8e775')}</div>

          <div>
            <SkillTitle>React</SkillTitle>
          </div>
          <div>{RenderStar(8, '#f8e775')}</div>

          <div>
            <SkillTitle>AngularJS</SkillTitle>
          </div>
          <div>{RenderStar(8, '#f8e775')}</div>

          <div>
            <SkillTitle>Laravel</SkillTitle>
          </div>
          <div>{RenderStar(7, '#f8e775')}</div>
        </Grid>
        <Grid item lg={4}>
          <div>
            <SkillTitle>Google Maps API</SkillTitle>
          </div>
          <div>{RenderStar(7)}</div>

          <div>
            <SkillTitle>SQL</SkillTitle>
          </div>
          <div>{RenderStar(6)}</div>

          <div>
            <SkillTitle>REST API</SkillTitle>
          </div>
          <div>{RenderStar(9)}</div>
        </Grid>
      </Grid>
    </>
  )
}

export default Skills
