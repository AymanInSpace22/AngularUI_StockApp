import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CommonModule } from '@angular/common'; // Step 2: Import CommonModule




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponentComponent, FooterComponent, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StockTrack';
}
