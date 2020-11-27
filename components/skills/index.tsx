import React from 'react'
import SectionTitle from '../section/sectionTitle'
import StarIcon from '@material-ui/icons/Star'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles, Theme } from '@material-ui/core/styles'

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

const TooltopImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin: 4px;
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
          <LightTooltip
            placement="bottom-start"
            title={
              <TooltopImage
                src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
                alt="Tooltip"
              />
            }
          >
            <div>
              <SkillTitle>HTML</SkillTitle>
              <div>{RenderStar(10)}</div>
            </div>
          </LightTooltip>

          <LightTooltip
            placement="bottom-start"
            title={
              <TooltopImage
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png"
                alt="Tooltip"
              />
            }
          >
            <div>
              <SkillTitle>CSS</SkillTitle>
              <div>{RenderStar(8)}</div>
            </div>
          </LightTooltip>

          <LightTooltip
            placement="bottom-start"
            title={
              <TooltopImage
                src="https://www.thekitchencrew.com/wp-content/uploads/2016/03/js-logo.png"
                alt="Tooltip"
              />
            }
          >
            <div>
              <SkillTitle>Javascript</SkillTitle>
              <div>{RenderStar(9)}</div>
            </div>
          </LightTooltip>

          <LightTooltip
            placement="bottom-start"
            title={
              <TooltopImage
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                alt="Tooltip"
              />
            }
          >
            <div>
              <SkillTitle>Typescript</SkillTitle>
              <div>{RenderStar(6)}</div>
            </div>
          </LightTooltip>
        </Grid>
        <Grid item lg={4}>
          <LightTooltip
            placement="bottom-start"
            title={<TooltopImage src="https://pngimg.com/uploads/php/php_PNG7.png" alt="Tooltip" />}
          >
            <div>
              <SkillTitle>PHP</SkillTitle>
              <div>{RenderStar(8, '#f8e775')}</div>
            </div>
          </LightTooltip>

          <LightTooltip
            placement="bottom-start"
            title={
              <TooltopImage src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="Tooltip" />
            }
          >
            <div>
              <SkillTitle>React</SkillTitle>
              <div>{RenderStar(8, '#f8e775')}</div>
            </div>
          </LightTooltip>

          <LightTooltip
            placement="bottom-start"
            title={
              <TooltopImage
                src="https://angular.io/assets/images/logos/angular/angular.png"
                alt="Tooltip"
              />
            }
          >
            <div>
              <SkillTitle>AngularJS</SkillTitle>
              <div>{RenderStar(8, '#f8e775')}</div>
            </div>
          </LightTooltip>

          <LightTooltip
            placement="bottom-start"
            title={
              <TooltopImage
                src="https://seeklogo.com/images/L/laravel-framework-logo-C10176EC8C-seeklogo.com.png"
                alt="Tooltip"
              />
            }
          >
            <div>
              <SkillTitle>Laravel</SkillTitle>
              <div>{RenderStar(7, '#f8e775')}</div>
            </div>
          </LightTooltip>
        </Grid>
        <Grid item lg={4}>
          <LightTooltip
            placement="bottom-start"
            title={
              <TooltopImage
                src="https://media2.govtech.com/images/940*920/GOOGLE_MAPS_LOGO_JPG.jpg"
                alt="Tooltip"
              />
            }
          >
            <div>
              <SkillTitle>Google Maps API</SkillTitle>
              <div>{RenderStar(7)}</div>
            </div>
          </LightTooltip>

          <LightTooltip
            placement="bottom-start"
            title={
              <TooltopImage
                src="https://w7.pngwing.com/pngs/167/148/png-transparent-microsoft-azure-sql-database-microsoft-sql-server-database-blue-text-logo-thumbnail.png"
                alt="Tooltip"
              />
            }
          >
            <div>
              <SkillTitle>SQL</SkillTitle>
              <div>{RenderStar(6)}</div>
            </div>
          </LightTooltip>

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
