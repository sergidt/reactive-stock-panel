export type CardName = 'GOOGLE' | 'FACEBOOK' | 'APPLE' | 'MICROSOFT' | 'AMAZON';

export interface StockData {
    name: CardName;
    logo: string;
    marketCapital: number;
    openValue: number;
    minValue: number;
    maxValue: number;
}

export const stockDataList: StockData[] = [
    {
        name: 'GOOGLE',
        logo: 'assets/google.png',
        marketCapital: 656537958854,
        openValue: 948.13,
        minValue: 948.13,
        maxValue: 952.8
    },
    {
        name: 'FACEBOOK',
        logo: 'assets/facebook.png',
        marketCapital: 656537958854,
        openValue: 948.13,
        minValue: 948.13,
        maxValue: 952.8
    },
    {
        name: 'AMAZON',
        logo: 'assets/amazon.jpg',
        marketCapital: 656537958854,
        openValue: 948.13,
        minValue: 948.13,
        maxValue: 952.8
    },
    {
        name: 'APPLE',
        logo: 'assets/apple.png',
        marketCapital: 656537958854,
        openValue: 948.13,
        minValue: 948.13,
        maxValue: 952.8
    },
    {
        name: 'MICROSOFT',
        logo: 'assets/microsoft.jpg',
        marketCapital: 656537958854,
        openValue: 948.13,
        minValue: 948.13,
        maxValue: 952.8
    }
];