import { Staff } from 'src/app/models/staff';
import { User } from 'src/app/models/user';
import { Duty } from './duty';

export type RotaRow = [Staff, Duty[]];

export type RotaRowDutyView = [Duty, Staff[][]];


