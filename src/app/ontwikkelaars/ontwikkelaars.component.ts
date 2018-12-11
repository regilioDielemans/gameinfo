import { Component, OnInit } from '@angular/core';
import { OntwikkelaarService } from '../ontwikkelaar.service';
import { Ontwikkelaar } from '../ontwikkelaar';

@Component({
  selector: 'app-ontwikkelaars',
  templateUrl: './ontwikkelaars.component.html',
  styleUrls: ['./ontwikkelaars.component.css']
})
export class OntwikkelaarsComponent implements OnInit {
  ontwikkelaars:Ontwikkelaar[]

  constructor(private ontwikkelaarService: OntwikkelaarService) { }

  ngOnInit() {
    this.getOntwikkelaars()
  }
  getOntwikkelaars():void{
    this.ontwikkelaarService.getOntwikkelaars()
     .subscribe(ontwikkelaars => this.ontwikkelaars = ontwikkelaars);
   }

}
