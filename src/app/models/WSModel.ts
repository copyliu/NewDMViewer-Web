import {TextModel} from './TextModel';
import {GiftModel} from './GiftModel';

export class WSModel {
  mode: string;
  data: TextModel | GiftModel;

  fillFromJson(s: string) {
    const jsonObj = JSON.parse(s);
    if (jsonObj.mode === 'text') {
      this.data = new TextModel();
      this.data.fillFromObj(jsonObj.data);
      return;
    }
    if (jsonObj.mode === 'gift') {
      this.data = new GiftModel();
      this.data.fillFromObj(jsonObj.data);

    }
  }
}
