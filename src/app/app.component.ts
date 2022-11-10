import { Component } from '@angular/core';
import { setHost } from 'middleware';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Middleware';

  ngOnInit() {
    const hostname = 'http://localhost:3000/';
    const formatResponse = setHost(hostname);
    console.log(
      '🚀 ~ file: app.component.ts ~ line 15 ~ AppComponent ~ ngOnInit ~ formatResponse',
      formatResponse
    );
    this.title = formatResponse;
  }
}
