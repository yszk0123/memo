import React from 'react';
import { APP_NAME } from '../../constants';
import { User } from '../../types/UserType';

interface Props {
  user: User | null;
}

export const AppLayout: React.FunctionComponent<Props> = ({ user, children }) => {
  return (
    <div className="AppLayout">
      <header className="AppLayout__header">
        <p>{APP_NAME}</p>
        {user !== null && <p>{user.displayName}</p>}
      </header>
      <main className="AppLayout__content">{children}</main>
      <style global jsx>{`
        html {
          font-size: 62.5%;
        }
        body {
          margin: 0;
          padding: 0;
        }

        /* Apply border-box to all elements */
        html {
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
      `}</style>
      <style global jsx>{`
        :root {
          --space: 8px;
          --radius: 4px;
          --border-width: 1px;

          --font-sm: 1.4rem;
          --font-md: 1.6rem;
          --font-lg: 1.8rem;

          --transition-delay: 0.2s;

          /* @see https://material-ui.com/customization/color/#color-palette */
          --palette-white: #ffffff;
          --palette-blue-200: #90caf9;
          --palette-blue-300: #64b5f6;
          --palette-blue-400: #90caf9;
          --palette-blue-500: #42a5f5;
          --palette-pink-200: #f48fb1;
          --palette-pink-300: #f06292;
          --palette-pink-400: #ec407a;
          --palette-pink-500: #e91e63;
          --palette-pink-a100: #ff80ab;
          --palette-pink-a200: #ff4081;
          --palette-pink-a400: #f50057;

          --palette-grey-50: #fafafa;
          --palette-grey-100: #f5f5f5;
          --palette-grey-200: #eeeeee;
          --palette-grey-300: #e0e0e0;
          --palette-grey-400: #bdbdbd;
          --palette-grey-500: #9e9e9e;
          --palette-grey-600: #757575;
          --palette-grey-700: #616161;
          --palette-grey-800: #424242;
          --palette-grey-900: #212121;

          --color-shadow: rgba(0, 0, 0, 0.1);
          --color-default: var(--palette-white);
          --color-default--hover: var(--palette-grey-200);
          --color-text: var(--palette-grey-900);
          --color-disabled: var(--palette-grey-200);
          --color-button-default: var(--palette-white);
          --color-button-default-hover: var(--palette-grey-200);
          --color-button-default-active: var(--palette-grey-300);
          --color-button-default-text: var(--palette-grey-900);
          --color-button-primary: var(--palette-blue-500);
          --color-button-primary-hover: var(--palette-blue-300);
          --color-button-primary-active: var(--palette-blue-200);
          --color-button-primary-text: var(--palette-white);
          --color-button-secondary: var(--palette-pink-a400);
          --color-button-secondary-hover: var(--palette-pink-300);
          --color-button-secondary-active: var(--palette-pink-200);
          --color-button-secondary-text: var(--palette-white);
          --color-button-secondary-text--reverse: var(--palette-grey-500);
          --color-sheet: var(--palette-grey-900);
        }

        .AppLayout {
          position: absolute;
          display: flex;
          width: 100vw;
          height: 100vh;
          flex-direction: column;
          font-size: var(--font-md);
        }
        .AppLayout__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: var(--color-button-primary);
          padding: var(--space);
          color: var(--color-button-primary-text);
          box-shadow: 0 1px 1px 0 var(--color-shadow);
          width: 100%;
        }
        .AppLayout__content {
          padding: var(--space);
        }

        .Button {
          padding: var(--space);
          border-width: var(--border-width);
          border-radius: var(--radius);
        }
        .Button:hover {
          cursor: pointer;
        }
        .Button:active {
          cursor: pointer;
        }
        .Button:disabled {
          background-color: var(--color-disabled);
          border-color: var(--color-disabled);
          cursor: default;
        }

        .DefaultButton {
          background-color: var(--color-button-default);
          border-color: var(--color-button-default);
        }
        .DefaultButton:hover {
          background-color: var(--color-button-default-hover);
          border-color: var(--color-button-default-hover);
        }
        .DefaultButton:active {
          background-color: var(--color-button-default-active);
          border-color: var(--color-button-default-active);
        }

        .PrimaryButton {
          background-color: var(--color-button-primary);
          border-color: var(--color-button-primary);
        }
        .PrimaryButton:hover {
          background-color: var(--color-button-primary-hover);
          border-color: var(--color-button-primary-hover);
        }
        .PrimaryButton:active {
          background-color: var(--color-button-primary-active);
          border-color: var(--color-button-primary-active);
        }

        .SecondaryButton {
          background-color: var(--color-button-secondary);
          border-color: var(--color-button-secondary);
        }
        .SecondaryButton:hover {
          background-color: var(--color-button-secondary-hover);
          border-color: var(--color-button-secondary-hover);
        }
        .SecondaryButton:active {
          background-color: var(--color-button-secondary-active);
          border-color: var(--color-button-secondary-active);
        }

        .TextInput {
          width: 100%;
        }

        .TextArea {
          width: 100%;
        }

        .Dialog__outer {
          position: absolute;
          width: 100vw;
          height: 100vh;
        }
        .Dialog__sheet {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0.4;
          background: var(--color-sheet);
        }
        .Dialog__main-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
        }
        .Dialog__main {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          position: relative;
          width: 80%;
          height: 80%;
        }

        .DialogContent {
          width: 100%;
          flex-grow: 1;
        }

        .DialogActions {
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }

        .Paper {
          box-shadow: 0 1px 2px 1px var(--color-shadow);
        }

        .List {
          display: flex;
          flex-direction: column;
          background-color: var(--color-default);
        }

        .ListItem {
          padding: var(--space);
          display: flex;
          align-items: center;
          background-color: var(--color-default);
          transition: background-color var(--transition-delay);
          cursor: pointer;
        }
        .ListItem:hover {
          background-color: var(--color-default--hover);
        }

        .NoteAddDialog {
          background-color: var(--color-default);
          padding: calc(var(--space) * 2);
        }
        .NoteAddDialog__content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .NoteAddDialog__text {
          /* Move to Dialog */
          font-size: var(--font-md);

          min-height: 6rem;
          flex-grow: 1;
        }
        .NoteAddDialog__actions {
          margin-top: var(--space);
        }
        .NoteAddDialog__button + .NoteAddDialog__button {
          margin-left: var(--space);
        }

        .NoteView {
          display: flex;
          justify-content: space-between;
        }
        .NoteView-text {
          flex-grow: 1;
          overflow-x: hidden;
        }
        .NoteView-created-at {
          font-size: var(--font-sm);
          min-width: 120px;
          color: var(--color-button-secondary-text--reverse);
        }
        .NoteView-remove {
          margin-left: var(--space);
          align-self: center;
        }
      `}</style>
    </div>
  );
};
