import { Component, OnInit } from '@angular/core';
import { OntwikkelaarService } from 'src/app/ontwikkelaar.service';
import { Ontwikkelaar } from 'src/app/ontwikkelaar';
import { Location} from '@angular/common';


@Component({
  selector: 'app-add-ontwikkelaar',
  templateUrl: './add-ontwikkelaar.component.html',
  styleUrls: ['./add-ontwikkelaar.component.css']
})
export class AddOntwikkelaarComponent implements OnInit {

  constructor(
    private ontwikkelaarService: OntwikkelaarService,
    private location: Location) { }
  

  ngOnInit() {
  }

  addOntwikkelaar(Name : String,Headquarters : String, Founder: String): void {
    const newOntwikkelaar = new Ontwikkelaar(Name,Headquarters,Founder)
    this.ontwikkelaarService.addOntwikkelaar(newOntwikkelaar)
      .subscribe(() =>this.goBack());
  }
  goBack():void{
    this.location.back();
  }

}
