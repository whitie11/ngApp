import { User } from 'src/app/models/user';
import { Duty } from './duty';

export interface Rota {
    staff: User;
    day01am: Duty;
    day01pm: Duty;
    day02am: Duty;
    day02pm: Duty;
    day03am: Duty;
    day03pm: Duty;

}


