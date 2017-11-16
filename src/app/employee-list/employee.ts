import { Organization } from "./organization";
export class Employee {

  userId : number;
  firstName : string;
  lastName : string;
  email : string;
  organization : Organization;
  organizationId: number;
  isAdmin: boolean;
  authUserId: string;
  	
	constructor (){
		
	}
}