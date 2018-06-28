import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Server} from '../models/Server';
@Injectable({
  providedIn: 'root'
})
export class GetServersService {
  servers:Observable<Server[]>;
  
  constructor(private http:HttpClient) { }
  getServers():Observable<Server[]>{
    let localApi='./assets/servers.json';
    return this.http.get(localApi).pipe(map((res:any)=>{
      return res.servers.map(item =>{
         return item;
      });
    }),catchError((error:HttpErrorResponse)=>throwError(error.message||'SERVER ERROR'))
    );
  }
 convertToGB(selectedRange){
    return selectedRange.indexOf('TB')!==-1?parseInt(selectedRange)*1000:parseInt(selectedRange)
  }
  getFromRemote(model):Observable<Server[]>{
    const remoteApi=`http://85.17.31.99:4300/api/servers?storageMin=
    ${this.convertToGB(model.minhddRange)}&storageMax=${this.convertToGB(model.hddRange)}
    &ram=${model.rams.map(ram=>parseInt(ram))}&hdd=${model.hdd}&location=${model.location}`;
    return this.http.get(remoteApi).pipe(map((res:any) => {
      return res.servers.map(item => {
         return item;
      });
    }));
  }
}
