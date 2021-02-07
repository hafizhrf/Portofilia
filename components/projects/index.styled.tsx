import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import { CardContent, Chip, Grid } from '@material-ui/core'
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
  margin-bottom: 100px;
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

const AuthorContainer = styled.div`
  margin: 12px 0 8px;
`

const CatalogueDetail = styled.div`
  margin: 12px 0 0px 16px;
  padding-right: 12px;
  width: 80%;
`

const CatalogueFooter = styled.div`
  position: absolute;
  bottom: 12px;
  width: 100%;
`

const Technology = styled(Chip)`
  background: #fce973 !important;
  margin: 0 8px 8px 0;
`

export {
  SeeMore,
  CardContentText,
  CardGrid,
  ProjectGrid,
  CardMedia,
  MCardContent,
  MCard,
  ContainerDecor,
  ProjectContainer,
  AuthorContainer,
  CatalogueDetail,
  CatalogueFooter,
  Technology,
}
