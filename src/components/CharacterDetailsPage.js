import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Loading,
  LoadingContainer,
  CharacterDetailsContainer,
  CharacterDetailsDataContainer,
  CharacterDetailsName,
  CharacterDetailsList,
  CharacterDetailsFirstCol,
} from '../styles/styles';

const Character = () => {
  const [character, setCharacter] = useState([]);
  const [name, setName] = useState('');
  const [specie, setSpecie] = useState('');
  const [status, setStatus] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState('');
  const [origin, setOrigin] = useState('');
  const [location, setLocation] = useState('');
  let { id } = useParams();

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    setLoading(true);
    const data = await (
      await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    ).json();

    setCharacter(data);
    setName(data.name);
    setSpecie(data.species);
    setStatus(data.status);
    setImage(data.image);
    setGender(data.gender);
    setLoading(false);
    setOrigin(data.origin.name);
    setLocation(data.location.name);
  };

  return (
    <>
      {loading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
      {!loading && (
        <CharacterDetailsContainer>
          <Link to={`/`}>
            <p
              style={{
                padding: '2rem 0 .5rem',
              }}
            >
              Go back
            </p>
          </Link>
          <div style={{ marginBottom: '-5%' }}>
            <img
              src={image}
              alt={name}
              style={{ width: '100%', margin: '0 auto', borderRadius: '.5rem' }}
            />
          </div>
          <CharacterDetailsDataContainer>
            <CharacterDetailsName>{name}</CharacterDetailsName>
            <CharacterDetailsList>
              <CharacterDetailsFirstCol>Status</CharacterDetailsFirstCol>
              {status}
            </CharacterDetailsList>
            <CharacterDetailsList>
              <CharacterDetailsFirstCol>Specie</CharacterDetailsFirstCol>
              {specie}
            </CharacterDetailsList>
            <CharacterDetailsList>
              <CharacterDetailsFirstCol>Gender</CharacterDetailsFirstCol>
              {gender}
            </CharacterDetailsList>
            <CharacterDetailsList>
              <CharacterDetailsFirstCol>Origin</CharacterDetailsFirstCol>
              {origin}
            </CharacterDetailsList>
            <CharacterDetailsList>
              <CharacterDetailsFirstCol>Location</CharacterDetailsFirstCol>
              {location}
            </CharacterDetailsList>
          </CharacterDetailsDataContainer>
        </CharacterDetailsContainer>
      )}
    </>
  );
};

export default Character;
