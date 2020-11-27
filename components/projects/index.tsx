import React from 'react'
import SectionTitle from '../section/sectionTitle'
import styled from 'styled-components'
import { CardContent, Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'

const ProjectContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 44px;
`

const ContainerDecor = styled.div`
  width: 100%;
  height: 100px;
  background: #fce973;
  border-radius: 32px 32px 0 0;
`

const MCard = styled(Card)`
  background: #3a3a3a !important;
  color: #fce973 !important;
  border: 8px solid #3a3a3a !important;
  border-radius: 12px !important;
  height: 100%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22) !important;
`
const MCardContent = styled(CardContent)`
  height: 100%;
`

const CardMedia = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`

const ProjectGrid = styled(Grid)`
  padding: 32px 20px;
  top: 0;
  margin-top: -100px !important;
`

const CardGrid = styled(Grid)`
  margin-bottom: 16px !important;
`

const CardContentText = styled(Typography)`
  color: white;
`

const SeeMore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
`

const Projects = (): React.ReactElement => {
  const Redirect = (url: string): void => {
    window.open(url, '_blank')
  }

  return (
    <>
      <SectionTitle text="projects" />
      <ProjectContainer>
        <ContainerDecor />
        <ProjectGrid container spacing={2} justify="space-between">
          <CardGrid item lg={3}>
            <MCard onClick={() => Redirect('https://dashboard.datahub.id')}>
              <CardActionArea style={{ height: '100%' }}>
                <CardMedia src="/images/datahub.png" alt="Card" />
                <MCardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Datahub.id
                  </Typography>
                  <CardContentText variant="body2">Field collecting data at ease</CardContentText>
                </MCardContent>
              </CardActionArea>
            </MCard>
          </CardGrid>
          <CardGrid item lg={3}>
            <MCard onClick={() => Redirect('https://github.com/hafizhrf/korone')}>
              <CardActionArea style={{ height: '100%' }}>
                <CardMedia src="/images/korone.png" alt="Card" />
                <MCardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Korone
                  </Typography>
                  <CardContentText variant="body2">
                    Discord bot build with node.js & discord.js
                  </CardContentText>
                </MCardContent>
              </CardActionArea>
            </MCard>
          </CardGrid>
          <CardGrid item lg={3}>
            <MCard>
              <CardActionArea style={{ height: '100%' }}>
                <CardMedia src="/images/b2b.png" alt="Card" />
                <MCardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Regopantes B2B Dashboard
                  </Typography>
                  <CardContentText variant="body2">
                    Regopantes B2B dashboard built with react js
                  </CardContentText>
                </MCardContent>
              </CardActionArea>
            </MCard>
          </CardGrid>
          <CardGrid item lg={3}>
            <MCard onClick={() => Redirect('https://99usahaku.telkomsel.com')}>
              <CardActionArea style={{ height: '100%' }}>
                <CardMedia src="/images/sme.png" alt="Card" />
                <MCardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Telkomsel SME
                  </Typography>
                  <CardContentText variant="body2">
                    Telkomsel SME Website (99usahaku)
                  </CardContentText>
                </MCardContent>
              </CardActionArea>
            </MCard>
          </CardGrid>
        </ProjectGrid>
        <SeeMore onClick={() => Redirect('https://github.com/hafizhrf')}>
          <Button variant="contained" color="primary">
            See More
          </Button>
        </SeeMore>
      </ProjectContainer>
    </>
  )
}

export default Projects
