import { useLSStore } from '../stores';

type Item = Record<string, unknown>;

type TooggleItemInLSType =
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

type CheckItemExistsInLSType = {
    item: Record<string, unknown>;
    key: LSItemTypes;
    id: string;
};

enum LSItemTypes {
    COMPARE = 'compare',
    FAVORITE = 'favorite',
    BIN = 'bin',
}

const toggleItemInLS = (params: TooggleItemInLSType) => {
    const LSStore = useLSStore();
    if (params.method === 'add') {
        LSStore.addItem(params.key, params.item as Record<string, string>);
    } else {
        LSStore.removeItem(params.key, params.value, params.id);
    }
};

const checkItemExistsInLS = ({ item, key, id }: CheckItemExistsInLSType) => {
    return getLSItemsByKey(key).some((el) => el[id] === item[id]);
};

const getLSItemsByKey = (key: LSItemTypes) => {
    const items: Record<string, unknown>[] =
        JSON.parse(localStorage.getItem(key)!) || [];
    return items;
};

export { toggleItemInLS, checkItemExistsInLS, getLSItemsByKey, LSItemTypes };
