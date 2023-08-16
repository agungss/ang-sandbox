import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  taskName: string = 'Komponen Toggle';
  display: boolean = true;

  toggle() {
    this.display = !this.display;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
