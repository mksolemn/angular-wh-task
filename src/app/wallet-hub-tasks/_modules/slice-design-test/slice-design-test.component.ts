import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slice-design-test',
  templateUrl: './slice-design-test.component.html',
  styleUrls: ['./slice-design-test.component.scss']
})
export class SliceDesignTestComponent implements OnInit {
  public title: string;
  public heroImage: string;
  public formTitle: string;
  public creditCardName: string;

  constructor() {
    this.title = 'Do the right thing';
    this.formTitle = 'Credit Opportunities With Good Approval Odds†';
    this.creditCardName = 'Barclaycard CashForward™ World MasterCard™';
  }

  ngOnInit() {
  }

}
