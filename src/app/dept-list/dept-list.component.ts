import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../department';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.scss']
})
export class DeptListComponent implements OnInit {
models:any[]
  constructor(private http:HttpClient) { }

  ngOnInit() {
this.http.get<any>('http://localhost:33294/api/department').subscribe(res=>{
  this.models=res;
})
  }

}
