import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StockTrack';
}
