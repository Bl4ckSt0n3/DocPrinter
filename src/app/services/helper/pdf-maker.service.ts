import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from "pdfmake/build/vfs_fonts";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;



@Injectable({
  providedIn: 'root'
})
export class PdfMakerService {

  constructor() { }

  public export(docFormData: any): void {

    const docDefinition: any = {
    
      content: [
        { text: "İSTANBUL NÖBETÇİ SULH CEZA HAKİMLİĞİNE", style: "header" },

        {
          text: "İTİRAZ EDEN :  " + docFormData.name + "  " + docFormData.secondName,
          style: "subheader"
        },
        {
          text: "TC KİMLİK NO :  " + docFormData.identity,
          style: "subheader"
        },
        {
          text: "KONU :  "  +  docFormData.topic,
          style: "subheader"
        },
        {
          text: "İŞLEM TARİHİ :  " + new Date(docFormData.date).toLocaleDateString(),
          style: "subheader"
        },
        {
          text: "AÇIKLAMA :",
          style: "subheader"
        },
        {
          text: docFormData.description,
          style: "bodyText"
        },
        {
          text: "TALEP: ",
          style: "subheader"
        },
        {
          text: "25/07/2024 tarihinde Konak Meydanı'nda ambulansa yol verdiğimden dolayı 34 HAA 034 plakalı aracıma kesilen trafik cezasının kaldırılmasını arz ederim.",
          style: "bodyText"
        },
        {
          text: "Ad Soyad - Imza",
          style: "name"
        },
        // {
        //   text: "Tarih Imza",
        //   style: "dateAndSign"
        // },
        // "The following table has nothing more than a body array",
        // {
        //   style: "tableExample",
        //   table: {
        //     body: [
        //       ["Column 1", "Column 2", "Column 3"],
        //       ["One value goes here", "Another one here", "OK?"]
        //     ]
        //   }
        // }
      ],

      styles: {
        header: {
          fontSize: 14,
          bold: true,
          margin: [100, 55, 0, 70]
        },
        subheader: {
          fontSize: 12,
          bold: true,
          margin: [0, 10, 0, 5],
        },
        bodyText: {
          fontSize: 11.3,
          bold: false,
          margin: [0, 5, 0, 15]
        },
        name: {
          fontSize: 12,
          bold: true,
          margin: [30, 250, 0, 0],
        },
        // dateAndSign: {
        //   fontSize: 12,
        //   bold: true,
        //   margin: [320, 320, 0, 0]
        // }
        // tableExample: {
        //   margin: [0, 5, 0, 15]
        // }
      }
    };

    pdfMake.createPdf(docDefinition).download("dilekce.pdf");
  }
}
