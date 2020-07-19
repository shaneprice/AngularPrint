import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-print-view',
  templateUrl: './print-view.component.html',
  styleUrls: ['./print-view.component.css']
})
export class PrintViewComponent implements OnInit {

  @Input() model : any;
  constructor() { 
    
  }

  ngOnInit(): void {
    debugger
  }

}
