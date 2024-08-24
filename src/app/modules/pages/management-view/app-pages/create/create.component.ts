import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { PdfMakerService } from 'src/app/services/helper/pdf-maker.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnDestroy, OnInit{

  title: string = "Dilekçe";

  constructor(private pdfMake: PdfMakerService,) 
  {

  }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s: any) => s.unsubscribe());
    this.subscriptions = [];
  }

  public faFileInvoice = faFileInvoice;
  subscriptions: Subscription[] = [];


  docForm = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
    ]),
    secondName: new FormControl('', [
      Validators.required, 
    ]),
    identity: new FormControl('', [
      Validators.required, 
    ]),
    address: new FormControl('', [
      Validators.required, 
    ]),
    date: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ]),
    topic: new FormControl('', [
      Validators.required
    ])
  });


  

  //#region functions

      save() {
        if (this.docForm.invalid) {
          return;
        }
        this.pdfMake.export(this.docForm.getRawValue());
      }

      public get _fControls() {
        return this.docForm.controls;
      }

      onChange($event: any) {

      }

  //#endregion functions

}
