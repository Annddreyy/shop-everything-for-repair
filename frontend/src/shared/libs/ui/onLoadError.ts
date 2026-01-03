import { imgNotFoundImg } from '../../ui/assets';

export const onLoadError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.src = imgNotFoundImg;
};
