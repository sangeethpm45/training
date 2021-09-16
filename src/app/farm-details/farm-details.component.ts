import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farm-details',
  templateUrl: './farm-details.component.html',
  styleUrls: ['./farm-details.component.css']
})
export class FarmDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
calculate(){
this.router.navigateByUrl('calculation')
}
}
