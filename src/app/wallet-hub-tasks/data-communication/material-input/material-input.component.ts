import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss']
})
export class MaterialInputComponent {
  private _formRefs: { formGr: FormGroup, formCtrlName: string };

  get formRefs() {
    return this._formRefs;
  }

  @Input() set formRefs(formRefs: { formGr: FormGroup, formCtrlName: string }) {
    this._formRefs = formRefs;
  };


  isInvalid() {
    return !this.formRefs.formGr.controls[this.formRefs.formCtrlName].valid && this.formRefs.formGr.controls[this.formRefs.formCtrlName].touched
  }

}
