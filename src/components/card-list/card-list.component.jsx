import React from 'react';
import './card-list.styles.scss';

import Card from '../card/card.component';

const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
