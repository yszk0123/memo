import { AnyAction } from 'redux';

export type Action<Type extends string, Payload = void> = Payload extends void
  ? { type: Type }
  : { type: Type; payload: Payload };

export type Reducer<State, TAction extends Action<any, any>> = (
  state: State,
  action: TAction,
) => State;

export type ReducerWithInitialState<State, TAction extends Action<any, any>> = (
  state: State | undefined,
  action: TAction,
) => State;

type ReducerHandler<TState, TType extends string, TAction extends { type: TType }> = {
  [Type in TType]?: TAction extends { type: Type } ? Reducer<TState, TAction> : never;
};
export function createReducer<TState, TType extends string, TAction extends { type: TType }>(
  initialState: TState,
  handler: ReducerHandler<TState, TType, TAction>,
  defaultReducer: ReducerWithInitialState<TState, TAction> = (state = initialState) => state,
): ReducerWithInitialState<TState, TAction> {
  const reducer: ReducerWithInitialState<TState, TAction> = (state = initialState, action) => {
    const h = handler[action.type];
    return h !== undefined ? h(state, action) : defaultReducer(state, action);
  };
  return reducer;
}

export type Dispatch = (arg: AnyAction | ((...args: any[]) => unknown)) => any;

export type Selector<State, SelectedState> = (state: State) => SelectedState;

type ActionCreatorLike<ActionType> = (...args: any[]) => { type: ActionType; payload?: unknown };
interface ActionCreatorsLike<ActionType> {
  [key: string]: ActionCreatorLike<ActionType>;
}
export function createActionCreators<ActionType>() {
  return <ActionCreators extends ActionCreatorsLike<ActionType>>(
    v: ActionCreators,
  ): ActionCreators => {
    return v;
  };
}
