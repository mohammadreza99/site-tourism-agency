import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { User } from './../../../model/user';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  @Input() user = new User();
  @Output() submitted: EventEmitter<FormGroup> = new EventEmitter;
  form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }
  onSUbmit(form: FormGroup) {
    if (form.valid)
      this.submitted.emit(form)
  }
}
