import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Server} from './Server';
import {GetServersService} from './get-servers.service';
import {STORAGE_RANGES,RAM_RANGES, HDD_TYPES,LOCATIONS} from './Server';

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
  model={
    range:'',
    minRange:'',
    rams:[],
    hdd:'',
    hddRange:0,
    minhddRange:0,
    location:''
  };
  constructor(private getServer:GetServersService){
    this.storageRanges=STORAGE_RANGES;
    this.ramRanges=RAM_RANGES;
    this.hddTypes=HDD_TYPES;
    this.locations=LOCATIONS;
    this.model={
      range:this.storageRanges[0],
      minRange:this.storageRanges[0],
      rams:[],
      hdd:'',
      hddRange:0,
      minhddRange:0,
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
    console.log(this.storageRanges[this.model.range]);
    this.model.hddRange=this.storageRanges[this.model.range];
    this.model.minhddRange=this.storageRanges[this.model.minRange];
    // console.log(this.model);
    // this.servers=this.getServer.getFromRemote(this.model);
  }
  
}
