import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TextModel} from '../../models/TextModel';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dmtext',
  templateUrl: './dmtext.component.html',
  styleUrls: ['./dmtext.component.css']
})
export class DMTextComponent implements OnInit {
  @Input() recvmsg: TextModel;
  @ViewChild('head') headimg: ElementRef;

  constructor(private  http: HttpClient) {
    // this.recvmsg = {msg: '1'};

  }

  ngOnInit() {
    // this.http.get<any>(`https://api.bilibili.com/x/space/acc/info?mid=${this.recvmsg.uid}`).subscribe(p => {
    //     if (p && p.face) {
    //       this.headimg.nativeElement.src = p.face;
    //     }
    //   }
    // );
    window.scrollTo(0, document.body.scrollHeight);
  }

}
