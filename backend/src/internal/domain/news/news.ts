export type NewsType = 'news' | 'tips' | 'article' | 'review';

export interface News {
    id: string;
    img: string;
    title: string;
    description: string;
    dateOfCreation: number;
    type: NewsType;
    htmlContent: string;
    author: string;
}
