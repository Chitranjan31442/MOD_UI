import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthService } from "src/app/shared/services/auth.service";

import { Router } from "@angular/router";

@Component({
  selector: "app-search-trainings",
  templateUrl: "./search-trainings.component.html",
  styleUrls: ["./search-trainings.component.css"]
})
export class getSearchDataComponent implements OnInit {
  tech: string;
  skillData: Object;
  allUsers: any;
  showme: boolean = true;
  showSearchData: Object;
  status1: boolean = false;
  status2: boolean = false;
  term: string;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.getAllSkillslogy();
    console.log("get tech");
    this.status1 = false;
    this.status2 = false;
  }

  getAllSkillslogy() {
    console.log("hello");
    this.auth.getAllSkills().subscribe(data => {
      this.skillData = data;
    });
  }

  onSubmit() {
    console.log(this.tech);
    this.auth.getSearchData(this.tech).subscribe(data => {
      this.showSearchData = data;

      if (Object.keys(this.showSearchData).length > 0) {
        this.status1 = false;

        this.status2 = true;
      } else {
        this.status1 = true;
        this.status2 = false;
      }
      console.log(this.showSearchData);
    });
  }

  proposalSent(id) {
    let data = {
      id: id,
      trainerTechnology: this.tech
    };

    this.router.navigate(["user-dashboard/confirm-request"], {
      queryParams: data
    });
  }
}
