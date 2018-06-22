export class Server {
    model: string;
      ram:Ram ;
      hdd: Hdd;
      location: string;
      price:Price
}

export class Ram{
    
        memory:number;
        unit:string;
        type:string;
     
}

export class Hdd{
        memory: number;
        count: number;
        unit: string;
        type : string;
      
}

export class Price{
       currency: String;
        currencySymbol: string;
        amountCents: number;
}

export const STORAGE_RANGES = {0:'0', 1:'250GB', 2:'500GB', 3:'1TB', 4:'2TB', 5:'3TB', 6:'4TB', 7:'8TB', 8:'12TB', 9:'24TB',10:'48TB', 11:'72TB'};

export const RAM_RANGES=[{checked:false,value:'2GB'}, {checked:false,value:'4GB'}, {checked:false,value:'8GB'}, {checked:false,value:'12GB'}, {checked:false,value:'16GB'}, {checked:false,value:'24GB'}, {checked:false,value:'32GB'}, {checked:false,value:'48GB'}, {checked:false,value:'64GB'},{checked:false,value:'96GB'}];

export const HDD_TYPES = ['SAS', 'SATA2', 'SSD'];

export const LOCATIONS = ['AmsterdamAMS-01','San FranciscoSFO-12','Washington D.C.WDC-01', 'DallasDAL-10'];