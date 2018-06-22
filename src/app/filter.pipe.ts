import { Pipe, PipeTransform } from '@angular/core';
import {STORAGE_RANGES} from './Server';
@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {
  storageRange=STORAGE_RANGES;
  convertToGB(item,maxRange,minRange){
    item.hdd.memoryInGB=item.hdd.unit==='TB'?parseInt(item.hdd.memory)*1000:item.hdd.memoryInGB=parseInt(item.hdd.memory);
    maxRange=maxRange.indexOf('TB')!==-1?maxRange=parseInt(maxRange)*1000:maxRange=parseInt(maxRange);
    minRange=minRange.indexOf('TB')!==-1?parseInt(minRange)*1000:parseInt(minRange)
    return item.hdd.memoryInGB>maxRange||item.hdd.memoryInGB<minRange;
  }
  transform(value: any, model: any): any {
    if(!value||!model)
    {
      return value;
    }
    return value.filter(val=>{
      if(model.location!==''){
        if(val.location!==model.location){
          return false
        }
    }
    if(model.hdd!==''){
      if(val.hdd.type!==model.hdd){
        return false;
      }
    }
    if(model.rams.length>0){
      if(model.rams.indexOf(val.ram.memory.concat(val.ram.unit))===-1){
        return false;
      }
    }
    if(model.range!=='0'){
        if(this.convertToGB(val,this.storageRange[model.range],this.storageRange[model.minRange])){
          return false;
        }
    }
      return true;
    })
    
  }

}
//val.location===model.location&&val.hdd.type===model.hdd&&model.rams.indexOf(val.ram.memory.concat(val.ram.unit))!==-1
//&&val.hdd.type===model.hdd&&model.rams.indexOf(val.ram.memory+val.ram.unit)!==-1);
//return val.location===model.location&&val.hdd.type===model.hdd&&(model.rams.indexOf(val.ram.memory.concat(val.ram.unit))!==-1)&&this.convertToGB(val,this.storageRange[model.range]);
