import brand1 from './../../../assets/images/brands/brand1.svg';
import brand2 from './../../../assets/images/brands/brand2.svg';
import brand3 from './../../../assets/images/brands/brand3.svg';
import brand4 from './../../../assets/images/brands/brand4.svg';
import brand5 from './../../../assets/images/brands/brand5.svg';
import brand6 from './../../../assets/images/brands/brand6.svg';
import brand7 from './../../../assets/images/brands/brand7.svg';

export type Brand = {
    id: number;
    img: string;
};

export const brands: Brand[] = [
    { id: 1, img: brand1 },
    { id: 2, img: brand2 },
    { id: 3, img: brand3 },
    { id: 4, img: brand4 },
    { id: 5, img: brand5 },
    { id: 6, img: brand6 },
    { id: 7, img: brand7 },
];
