import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule here


@Component({
  selector: 'app-hello-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hello-component.component.html',
  styleUrl: './hello-component.component.css'
})
export class HelloComponentComponent {
  userInput: string = '';
  responseMessage: string = '';

  submit() {
    this.responseMessage = `You entered: ${this.userInput}`;
  }
}
