export default interface IPagination{
    min: number;
    max: number;
    current: number;
    change: (page:number)=>void;
}