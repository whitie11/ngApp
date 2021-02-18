import { User } from 'src/app/models/user';

export interface MyMessage {
    id: number;
    subject: string;
    body: string;
    isActive: boolean;
    datePosted: Date;
    postedBy: User;
}
