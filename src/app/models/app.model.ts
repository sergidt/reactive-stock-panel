export type CardName = 'GOOGLE' | 'FACEBOOK' | 'APPLE' | 'MICROSOFT' | 'AMAZON';

export interface StockData {
    name: CardName;
    logo: string;
    marketCapital: number | string;
    openValue: number;
    minValue: number;
    maxValue: number;
    currentValue: number;
}