import { Component, OnInit } from '@angular/core';
import { OntwikkelaarService } from 'src/app/ontwikkelaar.service';
import { ActivatedRoute } from '@angular/router';
import { Ontwikkelaar } from 'src/app/ontwikkelaar';

@Component({
  selector: 'app-ontwikkelaar-detail',
  templateUrl: './ontwikkelaar-detail.component.html',
  styleUrls: ['./ontwikkelaar-detail.component.css']
})
export class OntwikkelaarDetailComponent implements OnInit {
  ontwikkelaar: Ontwikkelaar;

  constructor(private ontwikkelaarsService: OntwikkelaarService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOntwikkelaar();
  }
  getOntwikkelaar(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.ontwikkelaarsService.getOntwikkelaarByName(name)
      .subscribe(ontwikkelaar => this.ontwikkelaar = ontwikkelaar);
  }

}
