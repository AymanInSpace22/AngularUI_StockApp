import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Step 2: Import CommonModule
import { CustomSpinnerComponent } from '../custom-spinner/custom-spinner.component';





@Component({
  selector: 'app-hello-component',
  standalone: true,
  imports: [FormsModule, CommonModule, CustomSpinnerComponent],
  templateUrl: './hello-component.component.html',
  styleUrl: './hello-component.component.css'
})
export class HelloComponentComponent {
  // userInput: string = '';
  // responseMessage: string = '';

  // submit() {
  //   this.responseMessage = `You entered: ${this.userInput}`;
  // }
  userInput: string = '';
  showModal: boolean = false;
  showSpinner: boolean = false; // New property to manage spinner visibility
  responsePros: string[] = [];
  responseCons: string[] = [];
  responseRating: string = '';

  constructor(private http: HttpClient) { }

  submit(): void {
    this.showSpinner = true; // Show spinner before API call
    const url = 'http://127.0.0.1:5000/stock/analyze';
    this.http.post(url, { ticker: this.userInput }, { responseType: 'json' })
      .subscribe({
        next: (response: any) => {
          this.responsePros = response.analysis.Pros;
          this.responseCons = response.analysis.Cons;
          this.responseRating = `Rating: ${response.analysis.Rating}`;
          this.showModal = true; // Show the modal with the response
          this.showSpinner = false; // Hide spinner after receiving response
        },
        error: (error) => {
          console.error('There was an error!', error);
          this.showSpinner = false; // Hide spinner on error
        }
      });
  }

  closeModal(): void {
    this.showModal = false;
  }

  reopenModal(): void {
    if (this.responsePros.length > 0 || this.responseCons.length > 0 || this.responseRating !== '') {
      this.showModal = true;
    }
  }
}
