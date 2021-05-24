export default interface IButtonPagination {
  set: number;
  cur: number;
  text: string | number;
  disable: boolean;
  change: (e: number) => void;
}
