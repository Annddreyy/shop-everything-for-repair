export enum Colors {
    RED = '#E52B0E',
    BLACK = '#011120',
    BLUE = '#186FD4',
    GRAY = '#F6F8FB',
    LIGHT_BLUE = '#117FE3',
    WHITE = '#ffffff',
};

export type Button = {
    text: string;
    icon?: string;

    bgColor: Colors;
    textColor: Colors;
    borderColor?: Colors;

    isRound?: boolean;
};
