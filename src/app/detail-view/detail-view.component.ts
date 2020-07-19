import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  @Input() model : any;
  constructor() { }

  ngOnInit(): void {
    
  }
  printReport(){
    window.print();
  }
}
