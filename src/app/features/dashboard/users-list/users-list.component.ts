import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserListResponse } from 'src/app/shared/models/response/user-list-response';
import { AuthService } from '../../authentication/services/implementations/auth.service';
import { Constants } from 'src/app/shared/constant/constants';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  userLists: UserListResponse[]|undefined = [];
  page:number = 1;
  approvedId!: number;
  isActive: boolean = true;
  hideBanner: boolean = false;
  userText!: string;
  getUser!: number;

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getUser = +JSON.stringify(sessionStorage.getItem(Constants.USER_ID));
    this.getUserLists();
  }

  getUserLists(){
    this.userService.fetchUserList(this.page).subscribe({
      next: (response: UserListResponse[]|undefined) => {
        this.userLists = response;
        console.log(`this.userLists , ${JSON.stringify(this.userLists)}`);
      },
      error: (error: any) => {
        this.userLists = undefined;
        console.error(`Error occurred :: ${error}`);
      }
    })
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
  }

  approveAdmin(userId: number, email: string){
    this.userService.approveUser(userId).subscribe({
      next: (response: any) => {
        console.log('User approved successfully:', response);
        this.approvedId = response.id;
        sessionStorage.setItem(
          Constants.USER_ID,
          `${this.approvedId}`
        );
        this.isActive = false;
        this.userText = `${email} is Assigned as Admin Successfully`;
        this.hideBanner = true;
        // Reload users after approval
        this.getUserLists();
      },
      error: (error: any) => {
        console.error('Error approving user:', error);
      }
     }
    );
  }

  isAdmin(userId: number): boolean {
    return this.userService.isAdmin(userId);
  }

  update(userId: number){
    let payload = {
      name: "morpheus",
      job: "zion resident"
    }
    this.userService.updateUser(userId, payload).subscribe({
      next: (response: any) => {
        alert(`Data updated successfully, ${JSON.stringify(response)}`);
        this.getUserLists();
      },
      error: (error: any) => {
        alert(error.error);
      }
    })
  }

  delete(userId: number){
    this.userService.deleteUser(userId).subscribe({
      next: (response: any) => {
        alert(`User deleted successfully`);
        this.getUserLists();
      },
      error: (error: any) => {
        alert(error.error);
      }
    })
  }

}
