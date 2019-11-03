import React from 'react';
import TinyVirtualList from 'react-tiny-virtual-list';
import AutoSizer from 'react-virtualized-auto-sizer';

interface Props<T> {
  className?: string;
  items: T[];
  itemSize: number;
  renderItem: (item: T) => React.ReactElement;
  onFetchMore: (item: T) => void;
}

export function VirtualList<T>({
  items,
  itemSize,
  renderItem,
  onFetchMore,
}: Props<T>): React.ReactElement {
  const itemCount = items.length;

  return (
    <AutoSizer>
      {({ height, width }) => {
        return (
          <TinyVirtualList
            height={height}
            itemCount={itemCount}
            itemSize={itemSize}
            renderItem={({ index, style }) => {
              const item = items[index];
              const listItem = renderItem(item);
              return React.cloneElement(listItem, { key: index, style });
            }}
            width={width}
            onItemsRendered={({ stopIndex }) => {
              if (stopIndex === itemCount - 1) {
                onFetchMore(items[itemCount - 1]);
              }
            }}
          />
        );
      }}
    </AutoSizer>
  );
}
