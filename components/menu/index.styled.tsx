import styled from 'styled-components'

const MenuOverlay = styled.div`
  position: fixed;
  top: 46%;
  left: 20px;
  padding: 20px;
  border-radius: 50%;
  background: black;
  color: white;
  cursor: pointer;
  z-index: 11;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media (max-width: 992px) {
    top: 20px;
    left: 46%;
  }
`

const MenuContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 52px;
  top: 0;
  background: lightgrey;
  z-index: 10;

  @media (max-width: 992px) {
    width: 100%;
    height: 52px;
  }
`

export { MenuOverlay, MenuContainer }
