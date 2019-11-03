import React, { useMemo } from 'react';
import TinyVirtualList from 'react-tiny-virtual-list';
import AutoSizer from 'react-virtualized-auto-sizer';

interface Props<T> {
  className?: string;
  items: T[];
  itemSize: number;
  stickyItemSize: number;
  renderItem: (item: T) => React.ReactElement;
  renderStickyItem: (item: T) => React.ReactElement;
  onFetchMore: () => void;
  getKey: (item: T) => string;
}

interface Sticky<T> {
  key: string;
  item: T;
  _: 'sticky';
}

function isSticky<T>(item: T | Sticky<T>): item is Sticky<T> {
  return item['_'] === 'sticky';
}

export function GroupVirtualList<T>({
  items,
  itemSize,
  stickyItemSize,
  renderItem,
  renderStickyItem,
  onFetchMore,
  getKey,
}: Props<T>): React.ReactElement {
  const { group, stickyIndices } = useMemo(() => {
    const group: Array<T | Sticky<T>> = [];
    const stickyIndices: number[] = [];
    const itemCount = items.length;
    let lastKey: string | null = null;
    for (let i = 0; i < itemCount; i += 1) {
      const item = items[i];
      const key = getKey(item);
      if (key !== lastKey) {
        lastKey = key;
        const sticky: Sticky<T> = { key, item, _: 'sticky' };
        stickyIndices.push(group.length);
        group.push(sticky);
        group.push(item);
      } else {
        group.push(item);
      }
    }
    return { group, stickyIndices };
  }, [items, getKey]);

  const groupCount = group.length;

  return (
    <AutoSizer>
      {({ height, width }) => {
        return (
          <TinyVirtualList
            height={height}
            width={width}
            itemCount={groupCount}
            stickyIndices={stickyIndices}
            itemSize={i => {
              const item = group[i];
              return isSticky(item) ? stickyItemSize : itemSize;
            }}
            renderItem={({ index, style }) => {
              const item = group[index];
              const listItem = isSticky(item) ? renderStickyItem(item.item) : renderItem(item);
              return React.cloneElement(listItem, { key: index, style });
            }}
            onItemsRendered={({ stopIndex }) => {
              if (stopIndex === groupCount - 1) {
                onFetchMore();
              }
            }}
          />
        );
      }}
    </AutoSizer>
  );
}
