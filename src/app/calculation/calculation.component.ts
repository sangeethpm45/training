import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
report(){
this.router.navigateByUrl('report')
}
}
