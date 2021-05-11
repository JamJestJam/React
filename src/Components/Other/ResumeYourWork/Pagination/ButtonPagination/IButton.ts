export default interface IButtonPagination {
  set: number;
  cur: number;
  change: (e: number) => void;
  text: string | number;
  disable: boolean;
}
