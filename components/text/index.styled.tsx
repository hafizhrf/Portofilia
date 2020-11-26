import styled from 'styled-components'

interface Props {
  fontSize?: string
  marginTop?: string
  lineHeight?: string
  color?: string
  weight?: string
  margin?: string
  fontWeight?: string
}

const TitleText = styled.span`
  font-family: Inter;
  font-style: normal;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: ${(props: Props) => props.fontSize || '32px'};
  color: ${(props: Props) => props.color || '#f8e775'};
`

const TextTruncated = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TitleTextBlack = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: white;
`

const CatalogueTitle = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;

  color: white;
`
const MediumTextBlack = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: white;
`

const MutedText = styled.span`
  font-family: Inter;
  letter-spacing: 1px;
  font-style: normal;
  font-weight: ${(props: Props) => props.fontWeight || '100'};
  font-size: ${(props: Props) => props.fontSize || '14px'};
  color: ${(props: Props) => props.color || '#d2d2d2'};
`

const SubtitleText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props: Props) => props.fontSize || '16px'};
  color: ${(props: Props) => props.color || 'white'};
`

const ContentText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: ${(props: Props) => props.weight || 'normal'};
  font-size: ${(props: Props) => props.fontSize || '14px'};
  line-height: ${(props: Props) => props.lineHeight || 'normal'};
  color: ${(props: Props) => props.color || 'white'};
`

const TitleDiv = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bolder;
  font-size: 32px;
  margin: ${(props: Props) => props.margin || '0'};
  line-height: 1.4;
  color: white;
`

export {
  CatalogueTitle,
  TitleText,
  TitleTextBlack,
  MediumTextBlack,
  MutedText,
  SubtitleText,
  ContentText,
  TextTruncated,
  TitleDiv,
}
