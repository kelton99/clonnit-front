import { Component, OnInit } from '@angular/core';
import { SubclonnitModel } from 'src/app/subclonnit/subclonnit-response';
import { SubclonnitService } from 'src/app/subclonnit/subclonnit.service';

@Component({
  selector: 'app-subclonnit-side-bar',
  templateUrl: './subclonnit-side-bar.component.html',
  styleUrls: ['./subclonnit-side-bar.component.css']
})
export class SubclonnitSideBarComponent implements OnInit {

  subclonnits: Array<SubclonnitModel>;
  displayViewAll: boolean;

  constructor(private subclonnitService: SubclonnitService) { }

  ngOnInit(): void {
    this.subclonnitService.getAllSubclonnits().subscribe(subclonnits => {
      if (subclonnits.length >= 4) {
        this.subclonnits = subclonnits.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subclonnits = subclonnits;
      }
    });
  }

}
