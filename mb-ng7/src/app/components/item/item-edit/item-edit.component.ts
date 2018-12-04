import { Router } from '@angular/router';
import { ReactiveItemService, Item } from './../../../services/reactive-item.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
    selector: 'mb-item-edit',
    templateUrl: './item-edit.component.html',
    styleUrls: ['./item-edit.component.css']
})

export class ItemEditComponent {

    currentForm: FormGroup;

    constructor(fb: FormBuilder, private ris: ReactiveItemService, private router:Router) {
        this.currentForm = new FormGroup({
            'name': new FormControl('', [Validators.required]),
            'details': new FormControl('', [Validators.required])
        });
    }

    get nameControl() { return this.currentForm.get('name'); }
    get detailsControl() { return this.currentForm.get('details'); }

    onSubmit(submittedForm: FormGroup) {
        let randomValue = Math.round((Math.random() * 999 + 1));
        this.ris.add(new Item(randomValue, submittedForm['name'], submittedForm['details']));
        this.currentForm.reset();
        this.router.navigate(['/item']);
    }
}