import { useLSStore } from '../../model';

type Item = Record<string, unknown>;

export type ToggleItemInLSType =
    | {
          method: 'add';
          key: LSItemTypes;
          item: Item;
      }
    | {
          method: 'remove';
          key: LSItemTypes;
          id: string;
          value: string;
      };

export type CheckItemExistsInLSType = {
    item: Record<string, unknown>;
    key: LSItemTypes;
    id: string;
};

export enum LSItemTypes {
    COMPARE = 'compare',
    FAVORITE = 'favorite',
    BIN = 'bin',
}

export const toggleItemInLS = (params: ToggleItemInLSType) => {
    const LSStore = useLSStore();
    if (params.method === 'add') {
        LSStore.addItem(params.key, params.item as Record<string, string>);
    } else {
        LSStore.removeItem(params.key, params.id, params.value);
    }
};

export const checkItemExistsInLS = ({
    item,
    key,
    id,
}: CheckItemExistsInLSType) => {
    return getLSItemsByKey(key).some((el) => el[id] === item[id]);
};

export const getLSItemsByKey = (key: LSItemTypes) => {
    const items: Record<string, unknown>[] =
        JSON.parse(localStorage.getItem(key)!) || [];
    return items;
};
