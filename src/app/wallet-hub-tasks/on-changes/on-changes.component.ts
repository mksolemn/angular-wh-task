import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.scss']
})
export class OnChangesComponent implements OnChanges {
  @Output() loggedIn: EventEmitter<boolean>;
  public changeCounter: number;
  private _loggedIn: boolean;
  private changesOutput: SimpleChanges;

  constructor() {
    this.loggedIn = new EventEmitter();
    this.changeCounter = 0;
  }

  get isLoggedIn(): boolean {
    return this._loggedIn;
  }

  @Input() set isLoggedIn(loginData: boolean) {
    this._loggedIn = loginData;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changesOutput = changes;
    this.loggedIn.emit(this._loggedIn);
    this.changeCounter++;
  }

}
