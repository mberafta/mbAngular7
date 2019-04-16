import { Component, OnInit, OnDestroy } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mb-ng7';

  serverSocketData: Observable<any> = this.socket.fromEvent<any>('testFromServer');

  constructor(private socket: Socket) {

  }

  ngOnInit() {
    this.socket.emit('testFromClient', "Test client ngx");
    this.serverSocketData.subscribe((data) => {
      console.log("Data from server", data);
    });
  }

  ngOnDestroy(){
    
  }

}
