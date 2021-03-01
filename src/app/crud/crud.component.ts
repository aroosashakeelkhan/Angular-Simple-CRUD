import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  ContactList:any=[];
  ModalTitle?:string;
  contact:any;
  ActivateAddEditContactComp:boolean=false;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshContactList();
  }

  getAll(): void {
    
  }

  refreshContactList(){
    this.service.getContacts().subscribe(data=>{
      this.ContactList=data;
    });
  }

  addClick(){
    this.contact={
      Id:0,
      contactType:""
    }
    this.ModalTitle="Add Contact";
    this.ActivateAddEditContactComp=true;
  }

  editClick(item:any){
    this.contact= item;
    this.ModalTitle="Edit Contact";
    this.ActivateAddEditContactComp=true;
  }



  closeClick(){
    this.contact={
      Id:0,
      contactType:""
    }
    this.ModalTitle="Add Contact";
    this.ActivateAddEditContactComp=true;
  }
}
