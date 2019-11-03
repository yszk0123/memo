import React from 'react';
import { Coordinate } from '../../types/CoordinateType';

interface Props {
  coordinate: Coordinate;
}

export const GoogleMaps: React.FunctionComponent<Props> = ({ coordinate }) => {
  return (
    <iframe
      src={`https://maps.google.co.jp/maps?output=embed&q=${coordinate.latitude},${coordinate.longitude}`}
    ></iframe>
  );
};
