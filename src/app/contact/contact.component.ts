import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  data = [];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost/employee.php').subscribe(data => {
    this.data.push(data);
    console.log(this.data);


    }, error => console.error(error));
  }



  ngOnInit(): void {
    function replaceCommaLine(data) {
      //convert string to array and remove whitespace
      let dataToArray = data.split(',').map(item => item.trim());
      //convert array to string replacing comma with new line
      return dataToArray.join("\n");
  }
  }

  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo);
  }



}
