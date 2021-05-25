export default interface IAmountFees{
    year: number;
    costCenter: string;
    currency: string;
    totalAmount: string;
    lawFirm: string;
}

export interface IAmountFeesData{
    data: IAmountFees[];
}