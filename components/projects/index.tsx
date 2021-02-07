/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import SectionTitle from '../section/sectionTitle'
import { CircularProgress } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import { getProjects } from '../../services/project'
import imageBuilder from '../../helpers/sanity/imageBuilder'
import {
  CardContentText,
  CardGrid,
  CardMedia,
  CatalogueDetail,
  CatalogueFooter,
  ContainerDecor,
  MCard,
  MCardContent,
  ProjectContainer,
  ProjectGrid,
  SeeMore,
  Technology,
} from './index.styled'

const Projects = (): React.ReactElement => {
  const [projects, setprojects] = useState<Project[]>([])
  const getData = async (): Promise<any> => {
    const res = await getProjects()
    setprojects(res)
  }

  useEffect(() => {
    getData()
  }, [])

  const Redirect = (url: string): void => {
    window.open(url, '_blank')
  }

  return (
    <>
      <SectionTitle text="projects" />
      <ProjectContainer>
        <ContainerDecor />
        <ProjectGrid container spacing={2}>
          {projects?.length > 0 ? (
            projects.map((project, key: number) => (
              <CardGrid item lg={3} key={key}>
                <MCard onClick={() => project.url && Redirect(project.url)}>
                  <CardActionArea style={{ height: '100%' }}>
                    <CardMedia src={imageBuilder(project.image.asset._ref)} alt="Card" />
                    <MCardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.name}
                      </Typography>
                      <CardContentText variant="body2">{project.description}</CardContentText>
                    </MCardContent>
                    <CatalogueFooter>
                      <CatalogueDetail>
                        <div>
                          {project.technologies?.length > 0 &&
                            project.technologies.map((tech, key: number) => (
                              <Technology key={key} label={tech} />
                            ))}
                        </div>
                      </CatalogueDetail>
                    </CatalogueFooter>
                  </CardActionArea>
                </MCard>
              </CardGrid>
            ))
          ) : (
            <CircularProgress />
          )}
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
