import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  count:number = 0;

  counter(type:string) {
    // this.count++;
    
    type==='add'?this.count++:this.count--;
  }

  onSubmit(event: any) {
    console.log(event);
    
  }

  
}
