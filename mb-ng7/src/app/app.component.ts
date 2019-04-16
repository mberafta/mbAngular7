import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit
} from '@angular/core';

import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements
  OnInit,
  OnDestroy {
  title = 'mb-ng7';

  serverSocketData: Observable<any> = this.socket.fromEvent<any>('testFromServer');

  constructor(private socket: Socket) {
    console.log('Constructor called');
  }

  ngOnInit() {
    console.log('OnInit called');
    this.socket.emit('testFromClient', "Test client ngx");
    this.serverSocketData.subscribe((data) => {
      console.log("Data from server", data);
    });
  }

  ngOnDestroy() {
    console.log('OnDestroy called');
  }

}
