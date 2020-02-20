import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slice-design-test',
  templateUrl: './slice-design-test.component.html',
  styleUrls: ['./slice-design-test.component.scss']
})
export class SliceDesignTestComponent implements OnInit {
  public title: string;
  public heroImage: string;

  constructor() {
    this.title = 'Do the right thing';
  }

  ngOnInit() {
  }

}
