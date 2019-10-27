import { Coordinate } from '../types/CoordinateType';

export function getCurrentPositionFromGeoLocation(): Promise<Coordinate> {
  return new Promise((resolve, reject) => {
    return navigator.geolocation.getCurrentPosition(position => {
      const coordinate: Coordinate = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      resolve(coordinate);
    }, reject);
  });
}
