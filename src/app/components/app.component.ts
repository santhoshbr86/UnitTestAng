import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Server} from '../models/Server';
import {GetServersService} from '../services/get-servers.service';
import {STORAGE_RANGES,RAM_RANGES, HDD_TYPES,LOCATIONS, InputModel} from '../models/Server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  servers:Observable<Server[]>
  storageRanges={}
  ramRanges={};
  hddTypes=[];
  locations=[];
  model:InputModel
  constructor(private getServer:GetServersService){
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
    this.servers=this.getServer.getServers();
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
