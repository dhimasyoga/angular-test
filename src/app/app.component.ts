import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  displayedColumns: string[] = ['name', 'user_type', 'entry', 'status'];
  // dataSource: any = new MatTableDataSource([]);
  dataSource:any = new MatTableDataSource([]);

  @ViewChild(MatPaginator, {read: true}) paginator:any = MatPaginator;

  constructor(private httpClient: HttpClient){}
  ngOnInit(){    
    this.httpClient.get("assets/mentor.json").subscribe(data =>{
      this.dataSource = data;
      this.dataSource.paginator = this.paginator;
    })
  }

  // ngAfterViewInit() {
  //   // this.dataSource.data = this.dataSource;
  //   this.dataSource.paginator = this.paginator;
  // }
}
