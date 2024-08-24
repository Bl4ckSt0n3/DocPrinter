import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doc } from 'src/app/models/Doc';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements AfterViewInit {

  constructor(private cdr: ChangeDetectorRef, private router: Router) {}
  ngAfterViewInit(): void {

  }



  //#region definitions
    docData: Doc[] = [
      {
        title: "Trafik Cezasi ",
        description: "Trafik cezasi itiraz dilekcesi yazmak icin tiklayin.",
        url: "pages/create"
      }
    ];
  //#endregion definitions

  public redirect(urlParam: string): void {
    
    this.router.navigate([urlParam]);
  }

}
