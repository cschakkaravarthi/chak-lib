import React, { FC } from 'react';

export interface PartitionProps {
  message: string;
  className?: string;
}

export const Partition: FC<PartitionProps> = props => {
  return (
    <div className={props.className ? `gray-600 ${props.className}` : 'gray-600'}>
      <p className="text-upper font-size-md text-center top-gray-border">{props.message}</p>
    </div>
  );
};
