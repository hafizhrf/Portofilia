import styled from 'styled-components'

interface Props {
  visibility?: boolean
}

const MenuOverlay = styled.div`
  position: fixed;
  top: 46%;
  left: 20px;
  padding: 20px;
  border-radius: 50%;
  background: black;
  color: #f8e775;
  cursor: pointer;
  z-index: 11;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media (max-width: 992px) {
    right: 8px;
    bottom: 8px;
    left: unset;
    top: unset;
  }
`

const MenuContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 52px;
  top: 0;
  background: #f8e775;
  z-index: 10;

  @media (max-width: 992px) {
    width: 60px;
    height: 60px;
    right: 0;
    bottom: 0;
    top: unset;
    border-top-left-radius: 100%;
  }
`

const MenuContent = styled.div`
  display: flex;
  position: fixed;
  top: 46.8%;
  left: 100px;

  @media (max-width: 992px) {
    right: 18px;
    bottom: 72px;
    left: unset;
    top: unset;
    flex-direction: column;
  }
`

const ContentButton = styled.div`
  font-size: 12px;
  margin-right: 20px;
  text-align: center;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 12px;
  color: #3b3b3b;
  transition: ease-in-out 0.2s;
  border-radius: 50%;
  cursor: pointer;
  display: ${({ visibility = true }: Props) => (visibility ? 'block' : 'none')};

  &:hover {
    color: #f8e775;
  }

  @media (max-width: 992px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`

export { MenuOverlay, MenuContainer, MenuContent, ContentButton }
