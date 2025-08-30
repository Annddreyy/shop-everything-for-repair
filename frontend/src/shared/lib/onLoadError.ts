import { imgNotFoundImg } from '@/assets/images';

export const onLoadError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.src = imgNotFoundImg;
};
