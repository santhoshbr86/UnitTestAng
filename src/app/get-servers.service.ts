import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Http} from '@angular/http';
import {Server} from './Server';
@Injectable({
  providedIn: 'root'
})
export class GetServersService {
  servers:Observable<Server[]>;
  
  constructor(private http:Http) { }
  getServers():Observable<Server[]>{
    let localApi='./assets/servers.json';
    return this.http.get(localApi).pipe(map((res:any)=>{
      return res.json().servers.map(item =>{
         return item;
      });
    }));
  }
 convertToGB(selectedRange){
    return selectedRange.indexOf('TB')!==-1?parseInt(selectedRange)*1000:parseInt(selectedRange)
  }
  getFromRemote(model):Observable<Server[]>{
    let remoteApi=`http://85.17.31.99:4300/api/servers?storageMin=${this.convertToGB(model.minhddRange)}&storageMax=${this.convertToGB(model.hddRange)}&ram=${model.rams.map(ram=>parseInt(ram))}&hdd=${model.hdd}&location=${model.location}`;
    //http://85.17.31.99:4300/api/servers?storageMin=250&storageMax=44000&ram=2,4&hdd=SAS,SATA2&location=AmsterdamAMS-01
    return this.http.get(remoteApi).pipe(map((res:any)=>{
      return res.json().servers.map(item =>{
         return item;
      });
    }));
  }
}
