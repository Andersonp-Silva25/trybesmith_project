export type TProduct = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type TUser = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string,
};