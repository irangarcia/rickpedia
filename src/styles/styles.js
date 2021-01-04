import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background: #e9e9e9
  }

  h1, p {
    margin: 0;
  }

  a {
    color: #000000;
    text-decoration: none
  }
 
`;

export const HeaderContainer = styled.header`
  display: flex;
  background-color: rgba(167, 243, 208);
  transition-duration: 300ms;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 80px;
  transition-duration: 500ms;

  &:hover {
    transform: rotate(180deg);
  }
`;

export const SearchBar = styled.div`
  display: flex;
  margin: 2rem auto 0;
  border-radius: 100px;
  width: 50%;
  background: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  font-size: 1rem;

  input {
    padding: 9px 15px;
    height: 100%;
    width: -webkit-fill-available;
    border-radius: 100px;
    border: transparent;

    &:focus {
      outline: none;
    }
  }

  svg {
    margin: 9px;
    width: 1.2rem;
    height: 1.2rem;
    fill: #20e188;
  }

  @media (max-width: 767px) {
    width: 90%;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 1.25rem;
  row-gap: 1.5rem;
  padding: 2rem 4rem;

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 2rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const Card = styled.div`
  width: 100%;
  background-color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition-duration: 250ms;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

export const Button = styled.button`
  display: flex;
  margin: 1rem auto 3rem;
  padding: 12px 24px;
  background: #20e188;
  color: white;
  border-radius: 100px;
  text-transform: uppercase;
  font-weight: 1000;
  font-size: 0.9rem;
  border: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const CharacterName = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2rem;
  text-align: center;
  padding: 1.5rem 0.5rem 2rem;
  background-color: #ffffff;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem 0;
  margin: 10% -5%;
  overflow: hidden;
`;

export const Loading = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: transparent;
  color: transparent;
  box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
    18px 0 0 0 #9880ff, 12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0),
    0 18px 0 0 rgba(152, 128, 255, 0),
    -12.72984px 12.72984px 0 0 rgba(152, 128, 255, 0),
    -18px 0 0 0 rgba(152, 128, 255, 0),
    -12.72984px -12.72984px 0 0 rgba(152, 128, 255, 0);
  animation: dotSpin 1.5s infinite linear;

  @keyframes dotSpin {
    0%,
    100% {
      box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
        18px 0 0 0 #9880ff, 12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    12.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 0 #9880ff, 18px 0 0 0 #9880ff,
        12.72984px 12.72984px 0 0 #9880ff, 0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    25% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0), 18px 0 0 0 #9880ff,
        12.72984px 12.72984px 0 0 #9880ff, 0 18px 0 0 #9880ff,
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    37.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0), 12.72984px 12.72984px 0 0 #9880ff,
        0 18px 0 0 #9880ff, -12.72984px 12.72984px 0 0 #9880ff,
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    50% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0), 0 18px 0 0 #9880ff,
        -12.72984px 12.72984px 0 0 #9880ff, -18px 0 0 0 #9880ff,
        -12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0);
    }
    62.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0), -12.72984px 12.72984px 0 0 #9880ff,
        -18px 0 0 0 #9880ff, -12.72984px -12.72984px 0 0 #9880ff;
    }
    75% {
      box-shadow: 0 -18px 0 0 #9880ff,
        12.72984px -12.72984px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 0 #9880ff, -12.72984px -12.72984px 0 0 #9880ff;
    }
    87.5% {
      box-shadow: 0 -18px 0 0 #9880ff, 12.72984px -12.72984px 0 0 #9880ff,
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.72984px 12.72984px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.72984px -12.72984px 0 0 #9880ff;
    }
  }
`;

export const CharacterDetailsContainer = styled.div`
  padding: 0 1rem 2rem;

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0 5rem 2rem;
  }

  @media (min-width: 768px) and (max-width: 1000px) {
    padding: 0 15rem 2rem;
  }

  @media (min-width: 1000px) and (max-width: 1200px) {
    padding: 0 20rem 4rem;
  }

  @media (min-width: 1201px) and (max-width: 1400px) {
    padding: 0 29rem 6rem;
  }

  @media (min-width: 1401px) {
    padding: 0 33rem 6rem;
  }
`;

export const CharacterDetailsDataContainer = styled.div`
  background-color: white;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  margin: 0 auto;
  position: relative;
  padding: 2rem 2rem 3rem;
`;

export const CharacterDetailsName = styled.h1`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
`;

export const CharacterDetailsList = styled.li`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  font-size: 0.95rem;
  padding: 0.2rem 0;

  &:first-of-type {
    margin-top: 1.5rem;
  }
`;

export const CharacterDetailsFirstCol = styled.p`
  color: rgba(109, 109, 109);
  font-weight: 400;
  font-size: 0.95rem;
`;
