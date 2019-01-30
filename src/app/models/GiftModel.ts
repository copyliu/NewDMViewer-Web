import {Serializable} from './Serializable';

export class GiftModel extends Serializable  {
  provider: string;
  uid: string;
  gift: string;
  gift_id: string;
  count: number;
  username: string;
  vip: boolean;
  pre: string; // 前缀
  post: string; // 后缀
}
