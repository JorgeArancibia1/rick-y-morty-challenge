import React from 'react'
import { Row } from 'react-bootstrap';
import { BootstrapCard } from './BootstrapCard';

export const RenderList = ({ typeCard, results }) => {
  return (
    <>
      <Row xs={1} md={4} className="g-4 d-flex flex-nowrap">
        {
          results.map(card => {
            return <BootstrapCard typeCard={typeCard} {...card} key={card.id} />
          })
        }
      </Row>
    </>
  )
}
