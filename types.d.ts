/**
 * @see https://github.com/piotrwitek/typesafe-actions#extending-internal-types-to-enable-type-free-syntax-with-createreducer
 */
import { ActionType } from 'typesafe-actions';
import * as actions from './src/redux/actions';

export type RootAction = ActionType<typeof actions>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}
