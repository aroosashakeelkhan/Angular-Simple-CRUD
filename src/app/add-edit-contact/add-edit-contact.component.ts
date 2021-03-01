import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.css']
})
export class AddEditContactComponent implements OnInit {
  @Input()contact:any;
  Id?:string;
  contactType?:string;
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.Id=this.contact.contactId;
    this.contactType=this.contact.contactType;
  }

//This is the change i madee :)

  addContact(){
    var val={
      Id:this.Id,
      contactType:this.contactType
    };

    this.service.addContact(val).subscribe(res=>{
      alert(res.toString());
    });

  }

  updateContact(){
    var val={
      Id:this.Id,
      contactType:this.contactType
    };

    this.service.updateContact(val).subscribe(res=>{
      alert(res.toString());
    });


  }
  

}
