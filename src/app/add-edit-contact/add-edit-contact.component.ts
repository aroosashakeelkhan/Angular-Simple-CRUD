import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit {
  @Input()contact:any;
  id?:number;
  pInfoId?:number;
  creationTime?:Date;
  contactType?:string;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.id=this.contact.id;
    this.pInfoId=this.contact.pInfoId;
    this.creationTime=this.contact.creationTime;
    this.contactType=this.contact.contactType;
  }

//This is the change i madee :)

  addContact(){
    //create department object in JSON format
    var val={
      pInfoId:4,
      creationTime:new Date(),
      contactType:this.contactType
    };

    this.service.addContact(val).subscribe(res=>{
      alert(res.toString())
    });

  }

  updateContact(){
    var val={
      id:this.id,
      pInfoId:this.pInfoId,
      creationTime:this.creationTime,
      contactType:this.contactType
    };

    this.service.updateContact(val).subscribe(res=>{
      alert(res.toString())
    });
  }
  

}
