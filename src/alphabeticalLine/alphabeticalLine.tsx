import React from 'react';
import Button from 'react-bootstrap/Button';

import '../../scss/_alphabetical-line.scss';

type Props = {
  letter: string;
  className?: string;
  isActive?: string | boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export const AlphabeticalLine: React.FC<Props> = (props): JSX.Element => {
  return (
    <Button
      variant="link"
      id={props.letter}
      value={props.letter}
      onClick={props.onClick}
      className={`font-weight-bolder ${props.className} ${
        props.isActive ? 'is-active' : ''
      }`}
    >
      {props.letter}
    </Button>
  );
};
