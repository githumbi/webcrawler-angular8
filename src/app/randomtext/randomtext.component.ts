import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomtext',
  templateUrl: './randomtext.component.html',
  styleUrls: ['./randomtext.component.scss']
})
export class RandomtextComponent implements OnInit {

 
  constructor() { 
 
  }

  randomText(){
    const r = Math.random().toString(36).substring(7);
    return r;
  }
  ngOnInit(): void {
  }

}
