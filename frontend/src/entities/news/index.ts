import NewsCard from './ui/NewsCard.vue';
import NewsList from './ui/NewsList.vue';

export { NewsCard, NewsList };
export { newsAPI } from './api/news';
export { useNewsStore } from './model/useNews';
export type { News, NewsType } from './model/useNews';
