import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Server} from '../../models/Server';
import {GetServersService} from '../../services/get-servers.service';
import {STORAGE_RANGES,RAM_RANGES, HDD_TYPES,LOCATIONS, InputModel} from '../../models/Server';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers:Server[]
  storageRanges={}
  ramRanges={};
  hddTypes=[];
  locations=[];
  model:InputModel;
  errorMessage:string;
  constructor(private getServer:GetServersService, private activeRoute:ActivatedRoute){
    this.storageRanges=STORAGE_RANGES;
    this.ramRanges=RAM_RANGES;
    this.hddTypes=HDD_TYPES;
    this.locations=LOCATIONS;
    this.model={
      range:'1',
      minRange:'0',
      rams:[],
      hdd:'',
      hddRange:this.storageRanges[1],
      minhddRange:this.storageRanges[0],
      location:''
    };
  }
  ngOnInit(){
    this.getServer.getServers().subscribe(data=> this.servers=data,error=>this.errorMessage=error)
    console.log(this.activeRoute.url);
  }
  checkedRams(ram){
    if(ram.checked&&this.model.rams.indexOf(ram.value)===-1)
    {
      this.model.rams.push(ram.value);
    }
    else if(!ram.checked&&this.model.rams.indexOf(ram.value)!==-1){
      this.model.rams.splice(this.model.rams.indexOf(ram.value),1);
    }
    this.filterChange();
  }
  filterChange(){
    this.model.hddRange=this.storageRanges[this.model.range];
    this.model.minhddRange=this.storageRanges[this.model.minRange];
    // console.log(this.model);
    // this.servers=this.getServer.getFromRemote(this.model);
  }
  

}

