type Link = {
    link: `/${string}`;
    title: string;
};

type WithId<T> = T & { id: string };
