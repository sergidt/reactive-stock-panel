import { Injectable } from '@angular/core';
import { StockData } from '../models/app.model';

export const stockDataList: StockData[] = [
    {
        name: 'GOOGLE',
        logo: 'assets/google.png',
        marketCapital: '650.99B',
        openValue: 948.13,
        minValue: 948.13,
        maxValue: 952.8,
        currentValue: 952.8
    },
    {
        name: 'FACEBOOK',
        logo: 'assets/facebook.png',
        marketCapital: '650.99B',
        openValue: 948.13,
        minValue: 948.13,
        maxValue: 952.8,
        currentValue: 952.8
    },
    {
        name: 'AMAZON',
        logo: 'assets/amazon.jpg',
        marketCapital: '650.99B',
        openValue: 948.13,
        minValue: 948.13,
        maxValue: 952.8,
        currentValue: 952.8
    },
    {
        name: 'APPLE',
        logo: 'assets/apple.png',
        marketCapital: '650.99B',
        openValue: 948.13,
        minValue: 948.13,
        maxValue: 952.8,
        currentValue: 952.8
    },
    {
        name: 'MICROSOFT',
        logo: 'assets/microsoft.jpg',
        marketCapital: '650.99B',
        openValue: 948.13,
        minValue: 948.13,
        maxValue: 952.8,
        currentValue: 952.8
    }
];

@Injectable()
export class AppService {

    constructor() {

    }
}