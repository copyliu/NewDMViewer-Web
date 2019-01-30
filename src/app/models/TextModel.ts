import {Serializable} from './Serializable';

export class TextModel extends Serializable  {
  provider: string;
  uid: string;
  msg: string;
  username: string;
  vip: boolean;
  pre: string; // 前缀
  post: string; // 后缀

}
