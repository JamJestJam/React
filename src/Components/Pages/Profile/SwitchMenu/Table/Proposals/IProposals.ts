export default interface IProposals {
    name: string;
    entity: string;
    location: string;
    expertise: string;
    date: string;
    firm: string;
}

export interface IProposalsData {
    data: IProposals[];
}