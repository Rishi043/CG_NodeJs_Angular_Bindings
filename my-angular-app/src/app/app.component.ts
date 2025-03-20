import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Welcome to BridgeLabz"; 


  imgUrl: string = "https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg"; // Image URL 

    // Function to open BridgeLabz website in a new tab
    openBridgeLabz(): void {
      window.open("https://www.bridgelabz.com/", "_blank");
    }
}