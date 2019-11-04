import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { State } from '../types/StateType';

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
