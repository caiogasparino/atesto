import React from 'react';

interface Props {
  base64: string;
}

export const Base64Image: React.FC<Props> = ({ base64 }) => (
  // eslint-disable-next-line jsx-a11y/img-redundant-alt
  <img src={base64} alt="Base64-encoded image" />
);
