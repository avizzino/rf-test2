import { Component, OnInit} from '@angular/core'
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

import { FormDataModel } from "./formdata.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatusList = ['Stable', 'Critical', 'Finished'];
  formModel: FormGroup;


  constructor(private formBuilder: FormBuilder){}
  ngOnInit(){
    this.formModel = this.formBuilder.group(new FormDataModel);
    console.log(this.formModel);
  //    FormGroup({
  //     projectName : new FormControl(),
  //     email : new FormControl(),
  //     projectStatus:  new FormControl()
  //   });
  }


}