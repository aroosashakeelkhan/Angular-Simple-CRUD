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


  refreshContactList(){
    this.service.getContacts().subscribe(data=>{
      this.ContactList=data;
    });
  }

  addClick(){
    this.contact={
      id:0,
      pInfoId:4,
      contactType:"",
      creationTime:""
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
    this.ActivateAddEditContactComp=false;
    this.refreshContactList();
  }

  deleteClick(id:number){
    //if(confirm("Are you sure?")){
      this.service.deleteContact(id).subscribe(res=>{
      alert(res.toString());
      //this.service.deleteContact(id).subscribe();
     
    });
    this.refreshContactList();
  //}
    

  }
}
