import React from 'react';
import { Card, CharacterName } from '../styles/styles';

const CharacterCard = ({ id, image, name }) => {
  return (
    <Card>
      <img key={id} src={image} alt={name} style={{ width: '100%' }} />
      <CharacterName>{name}</CharacterName>
    </Card>
  );
};

export default CharacterCard;
