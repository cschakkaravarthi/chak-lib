import React, { useState } from 'react';
import StoriesContainer from '../StoriesContainer';
import { AlphabeticalLine } from './alphabeticalLine';
import Container from 'react-bootstrap/Container';

export const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

export default {
  component: AlphabeticalLine,
  title: 'Alphabetical Line'
};

export const alphabeticalLine = (): JSX.Element => {
  const [isActive, setIsActive] = useState('');

  const handleActiveItem = (letter: string): void => {
    setIsActive(letter);
  };

  return (<StoriesContainer>
    <p>
        This component takes 3 props: letter, onClick and isActive. You can play with them
        to set the active class to the proper element or just to grab the value of the
        clicked element and fire any other event onClick.
    </p>
    <hr/>
    <Container
      className="py-3 alphabetical-line d-flex flex-wrap justify-content-between">
      {alphabet.map((item: string) => (
        <AlphabeticalLine
          letter={item.toUpperCase()} key={item} onClick={() => handleActiveItem(item)} isActive={item === isActive} />))}
    </Container>
  </StoriesContainer>);
};
