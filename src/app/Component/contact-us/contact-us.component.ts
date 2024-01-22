import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

function nameValidator(control: { value: string }) {
  const valid = /^[a-zA-Z ]+$/.test(control.value);
  return valid ? null : { invalidName: true };
}

function phoneValidator(control: { value: string }) {
  const valid = /^(05|01)\d{9}$/.test(control.value);
  return valid ? null : { invalidPhone: true };
}

function emailValidator(control: { value: string }) {
  const valid = /^[a-zA-Z]\w*@(gmail\.com|yahoo\.com|hotmail\.com|icloud\.com)$/.test(control.value);
  return valid ? null : { invalidEmail: true };
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), nameValidator]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50), emailValidator]],
      phone: ['', [Validators.required, Validators.maxLength(50), phoneValidator]],
      message: ['', [Validators.required, Validators.maxLength(2500)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.toastr.success('لقد وصلتنا رسالتك شكرا علي تواصلك معنا', '', {
        positionClass: 'toast-top-right',
        progressBar: true,
        closeButton: true,
        tapToDismiss: false,
        timeOut: 3000,
        extendedTimeOut: 1000,
        toastClass: 'ngx-toastr-success'
      });

      this.contactForm.reset();
      this.formSubmitted = true;
    } else {

      this.toastr.error('حدث خطأ اثناء ادخال البيانات', 'خطأ', {
        positionClass: 'toast-top-right',
        progressBar: true,
        closeButton: true,
        tapToDismiss: false,
        timeOut: 3000,
        extendedTimeOut: 1000,
        toastClass: 'ngx-toastr-error'
      });
    }
  }
}
