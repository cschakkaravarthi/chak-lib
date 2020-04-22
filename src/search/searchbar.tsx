import React, { FC } from 'react';
import { Form as SourceForm, Button as SourceButton, InputGroup as SourceInputGroup } from 'react-bootstrap';
import '../../scss/_forms.scss';
import { images } from '../assets/images';

export interface SearchBarProps {
  handleSubmit: (e: React.SyntheticEvent) => void;
  handleChange: (e: React.SyntheticEvent) => void;
  searchTerm?: string;
}

export const SearchBar: FC<SearchBarProps> = props => {
  return (
    <SourceForm onSubmit={props.handleSubmit} className="search-form">
      <SourceInputGroup>
        <SourceInputGroup.Prepend>
          <SourceButton variant="outline-secondary" type="submit">
            <img src={images.searchIconWhite} width={15} height={15} />
          </SourceButton>
        </SourceInputGroup.Prepend>
        <SourceForm.Control
          placeholder="Search"
          aria-label="Search"
          value={props.searchTerm}
          onChange={props.handleChange}
        />
      </SourceInputGroup>
    </SourceForm>
  );
};
