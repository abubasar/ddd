import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { HttpClient } from '@angular/common/http';
import { Department } from '../department';
//import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';


@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']
})
export class CkeditorComponent implements OnInit {
 
 model:Department
  constructor(private http:HttpClient) {
    this.model=new Department();
    this.model.name='hello'
   }
  public Editor = ClassicEditor;
  ngOnInit() {
    
  }
 save(){
this.http.post('http://localhost:33294/api/department',this.model).subscribe(res=>{
console.log('success')
});
 }

}
