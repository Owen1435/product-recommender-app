import {User} from "./user";

export interface Review {
  id: number,
  product: number,
  rate: number,
  text: string
  created_by: User,
  created_at: string,
}
