import { TestBed, inject,getTestBed } from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';

import { GetServersService } from './get-servers.service';
import { HttpClientModule, HttpClient, HttpRequest} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async } from 'q';

fdescribe('GetServersService', () => {
  //let ser,http,backend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientTestingModule],
      providers: [GetServersService],
    });
  });
  beforeEach(inject([HttpTestingController], (httpMock:HttpTestingController) => {
    httpMock.verify();   
  }));
  // it('should be created', () => {
  //   expect(ser).toBeTruthy();
  // });
  it('Should get all server list of data', (inject([HttpClient,HttpTestingController],(http:HttpClient,httpMock:HttpTestingController) => {
    const serverSrvice=getTestBed().get(GetServersService);  
    const mockResponse = [
      {name:'DEll',type:'SSA',ram:'250GB',rom:'1TB'},
      {name:'DEll',type:'SSA',ram:'250GB',rom:'1TB'},
      {name:'DEll',type:'SSA',ram:'250GB',rom:'1TB'}
    ]
    serverSrvice.getServers().subscribe((data) => {
        expect(data.length).toBe(3);
      });
      const req=httpMock.expectOne('./assets/servers.json');
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
      httpMock.verify();
  })));
  it('Should through error all server list of data', (inject([HttpClient,HttpTestingController],(http:HttpClient,httpMock:HttpTestingController) => {
    const serverSrvice=getTestBed().get(GetServersService);  
   
    serverSrvice.getServers().subscribe({
      error(data){
        //expect(of(data)).toBeTruthy();
        expect(data).not.toBeNull();
        expect(data).not.toBeUndefined();
      }
    });
      
      const req=httpMock.expectOne('./assets/servers.json');
      expect(req.request.method).toEqual('GET');
      req.flush({errorMessage:'Oh Uh!'},{status:500,statusText:'Server Error'});
      httpMock.verify();
  })));
});
