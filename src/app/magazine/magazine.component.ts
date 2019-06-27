import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {

  fullName = "";
  editions = [
    {editionCode: 1, editionName: 'US', price:'10.99 USD'},
    {editionCode: 2, editionName: 'Canada', price:'14.99 CAD'},
    {editionCode: 3, editionName: 'International', price:'23.99 USD'}
  ];
  selectedEdition = this.editions[0];
  selectedShipping = "";
  acceptPolicy = false;

  magazineForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.magazineForm = fb.group({
      fullName: ["", Validators.required],
      selectedEdition: [this.editions[0]],
      selectedShipping: [""],
      acceptPolicy: [false]
    });
   }

  ngOnInit() {
  }

  submitForm() {
    const reqData = this.magazineForm.value;
    alert(JSON.stringify(reqData));
  }

}
