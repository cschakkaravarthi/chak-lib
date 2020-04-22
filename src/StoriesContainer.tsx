import React from 'react';
import Container from 'react-bootstrap/Container';

interface Props {
  className?: string;
}

const StoriesContainer: React.FC<Props> = props => (
  <Container className={`mr-auto my-5 ${props.className}`}>{props.children}</Container>
);

export default StoriesContainer;
