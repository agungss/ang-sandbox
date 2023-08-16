import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  generate() {
    // var d = new Date().getTime().toString();
    const uuid = uuidv4();
    console.log(uuid);
    
  }
  
}
