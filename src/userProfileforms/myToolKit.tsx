import React, { FC, SyntheticEvent, useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { images } from '../assets/images';
import { BookmarkInputProps, TodoInputProps, BookmarkItemProps, TodoItemProps } from '../interfaces';

export const TodoInput: FC<TodoInputProps> = props => {
  const [text, setText] = useState('');
  const { handleSave } = props;

  const handleTextChange = (e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setText(value);
  };

  const handleClick = (): void => {
    handleSave(text);
    setText('');
  };

  return (
    <Row className="py-2">
      <Col xs={10} sm={10} md={11} lg={11} xl={11} className="pl-0">
        <input
          type="text"
          value={text}
          placeholder="New To Do list item..."
          className="w-100 font-size-xs pl-3 text-dark"
          onChange={handleTextChange}
        />
      </Col>
      <Col xs={2} sm={2} md={1} lg={1} xl={1} className="pl-2 d-flex">
        <button className="font-size-xs gray-600 float-right pt-1 d-flex align-items-center" onClick={handleClick}>
          <Image src={images.addIcon} width={15} height={15} className="cursor-pointer" />
          <span className="d-none d-sm-inline d-md-inline d-lg-inline d-xl-inline pl-2 font-size-xs gray-600">Add</span>
        </button>
      </Col>
    </Row>
  );
};

export const BookmarkInput: FC<BookmarkInputProps> = props => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const { handleSave } = props;

  const handleUrlChange = (e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setUrl(value);
  };

  const handleTitleChange = (e: SyntheticEvent): void => {
    const { value } = e.target as HTMLInputElement;
    setTitle(value);
  };

  const handleClick = (): void => {
    handleSave(url, title);
    setUrl('');
    setTitle('');
  };

  return (
    <Row className="py-2">
      <Col xs={10} sm={10} md={6} lg={6} className="pl-0">
        <input
          type="text"
          value={url}
          placeholder="New Bookmark URL..."
          className="w-100 font-size-xs px-3 text-dark"
          onChange={handleUrlChange}
        />
      </Col>
      <Col xs={10} sm={10} md={5} lg={5} className="pl-0">
        <input
          type="text"
          value={title}
          placeholder="New Bookmark Title..."
          className="w-100 font-size-xs px-3 text-dark"
          onChange={handleTitleChange}
        />
      </Col>
      <Col xs={2} sm={2} md={1} lg={1} className="pl-2 d-flex">
        <button className="font-size-xs gray-600 float-right pt-1 d-flex align-items-center" onClick={handleClick}>
          <Image src={images.addIcon} width={15} height={15} className="cursor-pointer" />
          <span className="d-none d-sm-inline d-md-inline d-lg-inline d-xl-inline pl-2 font-size-xs gray-600">Add</span>
        </button>
      </Col>
    </Row>
  );
};

export const BookmarkItem: FC<BookmarkItemProps> = props => {
  const handleClick = (): void => {
    props.handleDelete(props.identifier);
  };

  return (
    <Row className="py-2">
      <Col xs={12} sm={12} md={12} lg={12} xl={12} className="border bookmark-input-container py-2">
        <a className="font-size-xs text-underlined text-dark" href={props.url} target="_blank">
          {props.title}
        </a>
        <button className="d-inline float-right cursor-pointer" onClick={handleClick}>
          <Image src={images.remove} width={15} height={15} className="cursor-pointer" />
          <span className="d-none d-sm-none d-md-inline d-lg-inline d-xl-inline pl-2 font-size-xs gray-600">
            Remove
          </span>
        </button>
      </Col>
    </Row>
  );
};

export const TodoItem: FC<TodoItemProps> = props => {
  const handleClick = (): void => {
    props.handleDelete(props.identifier);
  };

  return (
    <Row className="py-2">
      <Col xs={12} sm={12} md={12} lg={12} xl={12} className="border todo-input-container py-2">
        <span className="font-size-xs text-dark">{props.text}</span>
        <button className="d-inline float-right cursor-pointer" onClick={handleClick}>
          <Image src={images.remove} width={15} height={15} className="cursor-pointer" />
          <span className="d-none d-sm-none d-md-inline d-lg-inline d-xl-inline pl-2 font-size-xs gray-600">
            Remove
          </span>
        </button>
      </Col>
    </Row>
  );
};
