import {Customer} from './models/customer';

export interface AppState {
    readonly customer:Customer[];
}