import React, { useMemo } from 'react';
import styled from 'styled-components';

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: 50%;
  overflow: hidden;
`;

interface InitialAvatarProps extends React.ComponentPropsWithoutRef<typeof Avatar> {
  text: string;
}

export const InitialAvatar: React.FunctionComponent<InitialAvatarProps> = ({ text, ...props }) => {
  const initial = useMemo(() => {
    const parts = text.split(/\s+/);
    if (parts.length >= 2) {
      const [last, first] = parts;
      if (last.length && first.length) {
        return `${last[0].toUpperCase()}${first[0].toUpperCase()}`;
      }
    }
    return text.slice(0, 2).toUpperCase();
  }, [text]);

  return <InitialAvatarContainer {...props}>{initial}</InitialAvatarContainer>;
};

const InitialAvatarContainer = styled(Avatar)`
  color: var(--color-text);
  background-color: var(--color-button-default);
`;
