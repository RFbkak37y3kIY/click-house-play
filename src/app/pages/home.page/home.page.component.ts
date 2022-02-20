import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss']
})
export class HomePageComponent implements OnInit {
  panelOpenState: boolean = false;
  dbLink: string = 'http://';
  dbLogin: string = 'default';
  dbPassword: string = '';
  sqlRequest: string = 'select * from hepic_data.sip_transaction_call limit 10;';

  details: any[] = [];
  columns: any[] = [];
  errorMessage: string = '';
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {

  }

  formatData(data: any) {
    data = data || (window as any).data || {};

    this.columns = data.meta?.map((i: any) => i.name);
    this.details = data.data.map((i: any) => {
      let out:any = {};
      i.forEach((j: any, k: any) => {
        out[this.columns[k]] = j
      });
      return out;
    });

    console.log(this.columns, this.details)
  }

  @HostListener('document:keydown', ['$event'])
  onClickRun(event?: any): void {
    if (!event || event.code === 'Enter' && event.ctrlKey) {
      this.details = [];
      this.apiService.post(this.dbLink, {
        password: this.dbPassword,
        login: this.dbLogin,
        query: this.sqlRequest
      }).subscribe(response => {
        this.formatData(response);
        console.log(response);
      }, error => {
        this.details = [];
        console.log(error);
        this.errorMessage = error.error || error.message;
      })
    }
  }

}
