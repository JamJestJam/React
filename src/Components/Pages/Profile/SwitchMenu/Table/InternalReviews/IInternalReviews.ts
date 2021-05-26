export default interface IInternalReviews {
    name: string;
    entity: string;
    location: string;
    expertise: string;
    date: string;
}

export interface IInternalData {
    data: IInternalReviews[];
}