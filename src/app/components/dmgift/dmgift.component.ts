import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {GiftModel} from '../../models/GiftModel';

// import img from '../../../assets/default.jpg';

@Component({
  selector: 'app-dmgift',
  templateUrl: './dmgift.component.html',
  styleUrls: ['./dmgift.component.css']
})
export class DMGiftComponent implements OnInit {
  @Input()recvgift: GiftModel;
  @ViewChild('head') headimg;

  // headurl: string = img;

  constructor() {
    // this.recvgift = {count: 10, username: '测试'};
  }

  ngOnInit() {
    window.scrollTo(0, document.body.scrollHeight);
  }

}
