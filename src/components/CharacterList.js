import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, LoadingContainer, Loading, Button } from '../styles/styles';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);
      const newCharacters = (await getCharacters(page)) || '';
      setCharacter((prev) => [...prev, ...newCharacters]);
      setLoading(false);
    };

    loadCharacters();
  }, [page]);

  const getCharacters = async (page) => {
    const data = await (
      await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    ).json();
    return data.results;
  };

  return (
    <>
      <Container>
        {character.map((char) => {
          return (
            <Link to={`/character/${char.id}`}>
              <CharacterCard
                key={char.id}
                image={char.image}
                name={char.name}
              />
            </Link>
          );
        })}
      </Container>
      {loading && (
        <LoadingContainer>
          <Loading>Loading ...</Loading>
        </LoadingContainer>
      )}
      <Button onClick={() => setPage((prev) => prev + 1)}>See more</Button>
    </>
  );
};

export default CharacterList;
