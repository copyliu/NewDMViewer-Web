import {Component, Input, OnInit} from '@angular/core';
import {TextModel} from '../../models/TextModel';
import {GiftModel} from '../../models/GiftModel';

@Component({
  selector: 'app-recv',
  templateUrl: './recv.component.html',
  styleUrls: ['./recv.component.css']
})
export class RecvComponent implements OnInit {
  text: TextModel;
  gift: GiftModel;
  @Input() model: TextModel | GiftModel;

  constructor() {

  }

  ngOnInit() {
    if (this.model instanceof TextModel) {
      this.text = this.model;
    }
    if (this.model instanceof GiftModel) {
      this.gift = this.model;
    }

  }

}
