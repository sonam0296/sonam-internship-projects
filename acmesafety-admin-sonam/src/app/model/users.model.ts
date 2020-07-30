
import { Deserializable } from "./deserializable.model";
import { UserStatuses } from './user-statuses.model';
export class Users implements Deserializable {
  id: number;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  active: number;
  latitude: number;
  user_status_id:number;
  user_statuses: UserStatuses;
  parent_id: number;
  boss: number;
  password_token: string;
  password_token_expire: string;
  confirm_email_token: string;
  email_verified: number;
  created: string;
  modified: string;

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }

  getUsername(){
    return this.username;
  }
}
