import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slice-design-test',
  templateUrl: './slice-design-test.component.html',
  styleUrls: ['./slice-design-test.component.scss']
})
export class SliceDesignTestComponent implements OnInit {
  public title: string;
  public formTitle: string;
  public creditCardName: string;
  public perks: string[];
  public reviewsTotal: string;
  public approveOdds: string;
  public approveOddsText: string;
  public applyBtnText: string;
  public bottomLinkText: string;

  constructor() {
    this.title = 'Do the right thing';
    this.formTitle = 'Credit Opportunities With Good Approval Odds†';
    this.creditCardName = 'Barclaycard CashForward™ World MasterCard™';
    this.perks = [
      'Get a $100 cash rewards bonus after you spend $500 in purchases in the first 90 days after account oppening.',
      'Earn unlimited 1.5% cash rewards on every purcahse.',
      'Earn unlimited 1.5% cash rewards on every...show more '
    ];
    this.reviewsTotal = '3,252 Reviews';
    this.approveOddsText = 'Approval Odds†';
    this.approveOdds = 'Very Good';
    this.applyBtnText = 'Apply Now';
    this.bottomLinkText = 'See Details Rates & Fees';
  }

  ngOnInit() {
  }

}
