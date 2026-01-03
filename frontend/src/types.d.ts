type Link = {
    link: `/${string}`;
    title: string;
};

type WithoutId<T> = Omit<T, 'id'>;

enum Colors {
    RED = '#E52B0E',
    BLACK = '#011120',
    BLUE = '#186FD4',
    GRAY = '#F6F8FB',
    LIGHT_BLUE = '#117FE3',
    WHITE = '#ffffff',
}

type BaseApolloResponse<T> = T;

type BaseResponse<T> =
    | {
          status: 'success';
          data: T;
      }
    | {
          status: 'error';
          error: string;
      };

type MockResponse<T> = AxiosResponse<AxiosBaseResponse<T>>;

enum ResponseStatuses {
    OK = 200,
    NOT_FOUND = 404,
    SERVER_ERROR = 500,
}
