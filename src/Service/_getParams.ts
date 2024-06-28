export interface IGetParams {
  skip: number;
  take: number;
  columns: string[];
  sort: string;
  filter: unknown[];
  // filter: string;
}

const baseGetParams: IGetParams = {
  skip: 0,
  take: 100,
  sort: "",
  // filter: "",
  filter: [],
  columns: [],
};

export { baseGetParams };
