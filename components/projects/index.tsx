import React, { useState } from 'react'
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
  width: 100%;
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
  const [projectList] = useState([
    {
      name: 'Datahub.id',
      url: 'https://dashboard.datahub.id',
      image: '/images/datahub.png',
      description: 'Field collecting data at ease',
    },
    {
      name: 'Korone',
      url: 'https://github.com/hafizhrf/korone',
      image: '/images/korone.png',
      description: 'Discord bot build with node.js & discord.js',
    },
    {
      name: 'Regopantes B2B Dashboard',
      url: '',
      image: '/images/b2b.png',
      description: 'Regopantes B2B dashboard built with react js',
    },
    {
      name: 'Telkomsel SME',
      url: 'https://99usahaku.telkomsel.com',
      image: '/images/sme.png',
      description: 'Telkomsel SME Website (99usahaku)',
    },
    {
      name: 'SIP SMKN 1 KOTA BEKASI',
      url: 'https://sip-smkn1.hoshimachi.bandy.id',
      image: '/images/SIP.png',
      description:
        'Website inventaris buku serta pinjam meminjam buku baik buku fisik maupun dalam bentuk PDF, disertai dengan fitur tambahan seperti artikel',
    },
  ])
  const Redirect = (url: string): void => {
    window.open(url, '_blank')
  }

  return (
    <>
      <SectionTitle text="projects" />
      <ProjectContainer>
        <ContainerDecor />
        <ProjectGrid container spacing={2}>
          {projectList.map((project, key: number) => (
            <CardGrid item lg={3} key={key}>
              <MCard onClick={() => project.url && Redirect(project.url)}>
                <CardActionArea style={{ height: '100%' }}>
                  <CardMedia src={project.image} alt="Card" />
                  <MCardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.name}
                    </Typography>
                    <CardContentText variant="body2">{project.description}</CardContentText>
                  </MCardContent>
                </CardActionArea>
              </MCard>
            </CardGrid>
          ))}
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
