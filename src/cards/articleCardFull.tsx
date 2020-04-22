import React, { FC } from 'react';
import SourceCard from 'react-bootstrap/Card';
import { Category } from '../interfaces';
import { CardImage } from './cardImage';

export interface ArticleCardFullProps {
  imageUrl?: string;
  title: string;
  subtitle?: string;
  content?: JSX.Element;
  date?: string;
  // @TODO: Categories should be links? So this should be an array objects with label and link.
  categories?: Category[];
}

export const ArticleCardFull: FC<ArticleCardFullProps> = props => {
  const { imageUrl, title, subtitle, date, categories, content } = props;

  return (
    <SourceCard className='card-article-full rounded-0 border-0'>
      {imageUrl && (
        <CardImage imageUrl={imageUrl} />
      )}
      <SourceCard.Body className='px-3 py-4 p-md-5'>
        <SourceCard.Title className='font-weight-bold font-size-lg bottom-gap'>
          {title}
        </SourceCard.Title>
        <SourceCard.Text className='font-size-sm text-uppercase mb-1 font-weight-bold text-condensed card-date'>
          {date}
        </SourceCard.Text>
        {categories &&
          categories.map(c => (
            <SourceCard.Text
              className='font-size-sm gray-600 pr-3 d-inline font-weight-bold text-upper'
              key={c.drupal_id}>
              {c.title}
            </SourceCard.Text>
          ))}
        <div className="article-content top-gap">
          <SourceCard.Subtitle className='font-size-base my-2'>
            {subtitle}
          </SourceCard.Subtitle>
          {content}
        </div>
      </SourceCard.Body>
    </SourceCard>
  );
};
