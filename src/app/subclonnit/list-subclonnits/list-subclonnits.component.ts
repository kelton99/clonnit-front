import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { SubclonnitModel } from '../subclonnit-response';
import { SubclonnitService } from '../subclonnit.service';

@Component({
  selector: 'app-list-subclonnits',
  templateUrl: './list-subclonnits.component.html',
  styleUrls: ['./list-subclonnits.component.css']
})
export class ListSubclonnitsComponent implements OnInit {

  subclonnits: Array<SubclonnitModel>;

  constructor(private subclonnitService: SubclonnitService) { }

  ngOnInit(): void {
    this.subclonnitService.getAllSubclonnits().subscribe({
      next: (data) => this.subclonnits = data,
      error: (e) => throwError(() => new Error(e)),
    });
  }

}
