import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import ReconnectingWebSocket from 'reconnecting-websocket';
import {WSModel} from './models/WSModel';
import {RecvComponent} from './components/recv/recv.component';
import {MsgDirective} from './msg.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dm-window';
  private socket: ReconnectingWebSocket;
  msgs: any[] = [];
  @ViewChild(MsgDirective) adHost: MsgDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.socket = new ReconnectingWebSocket('ws://localhost:9944/BB');

    this.socket.addEventListener('message', (evt) => {
      const obj: WSModel = new WSModel();
      obj.fillFromJson(evt.data);
      // this.msgs.push(obj.data);
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(RecvComponent);
      const d = this.adHost.viewContainerRef.createComponent(componentFactory);
      (<RecvComponent>d.instance).model = obj.data;
    });
  }

  ngOnInit(): void {


  }


}
