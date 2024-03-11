import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {


  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }
}
