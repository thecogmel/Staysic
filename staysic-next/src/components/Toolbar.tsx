import React from 'react'
import { Container } from '../styles/pages/Toolbar'

const Toolbar: React.FC = () => {
  return (
    <Container>
      <button className="toolbarButton">Home</button>
      <button className="toolbarButton">Agenda</button>
      <button className="toolbarButton">Bio</button>
      <button className="toolbarButton">Integrantes</button>
      <button className="toolbarButton">Fotos</button>
    </Container>
  )
}
export default Toolbar
