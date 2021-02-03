import React, { useEffect, useState } from 'react'
import SectionTitle from '../section/sectionTitle'
import StarIcon from '@material-ui/icons/Star'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles, Theme } from '@material-ui/core/styles'
import { getSkills } from '../../services/skill'

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip)

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

// const TooltopImage = styled.img`
//   width: 100px;
//   height: 100px;
//   object-fit: contain;
//   margin: 4px;
// `

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
  const [skills, setskills] = useState<Skill[]>([])
  const getData = async (): Promise<void> => {
    const res = await getSkills()
    setskills(res)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <SectionTitle text="skills" />
      <Grid container spacing={2}>
        {skills.map((val, key) => (
          <Grid item lg={4} key={key}>
            <LightTooltip
              placement="bottom-start"
              // title={
              //   <TooltopImage
              //     src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
              //     alt="Tooltip"
              //   />
              // }
              title={val.name}
            >
              <div>
                <SkillTitle>{val.name}</SkillTitle>
                <div>
                  {RenderStar(val.rating, key % 2 === 0 || key === 0 ? '#73eefd' : '#f8e775')}
                </div>
              </div>
            </LightTooltip>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Skills
