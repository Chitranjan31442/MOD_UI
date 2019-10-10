import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import * as _ from "underscore";
@Component({
  selector: "app-add-block",
  templateUrl: "./add-block.component.html",
  styleUrls: ["./add-block.component.css"]
})
export class AddBlockComponent implements OnInit {
  users: Object;
  mentors: Object;
  allUsers: any;
  showBlock: Boolean;
  showUnBlock: Boolean;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.getAllRegistereds();
  }

  onGetUser() {
    this.users = _.where(this.allUsers, { role: 3 });
    this.mentors = _.where(this.allUsers, { role: 2 });
    console.log(this.mentors);
  }

  getAllRegistereds() {
    this.auth.getAllRegistered().subscribe(data => {
      this.allUsers = data;
      this.onGetUser();
    });
  }

  block(id) {
    /* this.showUnBlock = true;
    this.showBlock = false; */
    this.auth.blockById(id).subscribe(data => {
      alert(data);
      this.getAllRegistereds();
    });
  }
  unBlock(id) {
    /* this.showBlock = true;
    this.showUnBlock = false; */
    this.auth.unBlockById(id).subscribe(data => {
      alert(data);

      this.getAllRegistereds();
    });
  }
}
