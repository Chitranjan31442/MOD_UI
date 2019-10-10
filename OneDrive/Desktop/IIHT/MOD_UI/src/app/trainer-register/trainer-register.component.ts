import { Component, OnInit } from "@angular/core";

import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule
} from "@angular/forms";
import { AuthService } from "../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-trainer-register",
  templateUrl: "./trainer-register.component.html",
  styleUrls: ["./trainer-register.component.css"]
})
export class TrainerRegisterComponent implements OnInit {
  TrainerRegister: FormGroup;
  skillData: Object;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.TrainerRegister = this.fb.group({
      firstName: ["", [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      lastName: ["", [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      userName: ["", [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      email: ["",[
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]
      ],
      contactNumber: ['',[Validators.required, Validators.pattern("^([6-9]{1})([0-9]{9})$")]],
      Passwords: this.fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(4)]],
          confirmPassword: ['', Validators.minLength(4)]
        },
        { validator: this.comparePasswords }
      ),
      linkedinURL: ['', Validators.required],
      yearOfExperience: [
        '',
        [Validators.required, Validators.pattern("^[0-9]{1,2}$")]
      ],
      trainerTechnology: ['', Validators.required]
    });

    this.getAllSkillslogy();
  }

  getAllSkillslogy() {
    console.log("hello");
    this.auth.getAllSkills().subscribe(data => {
      console.log(data);
      this.skillData = data;
    });
  }

  comparePasswords(fb: FormGroup) {
    let confirmPassword = fb.get("confirmPassword");
    if (
      confirmPassword.errors == null ||
      "passwordMismatch" in confirmPassword.errors
    ) {
      if (fb.get("password").value != confirmPassword.value)
        confirmPassword.setErrors({ passwordMismatch: true });
      else confirmPassword.setErrors(null);
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.TrainerRegister.invalid) {
      return;
    }

    var result = {
      firstName: this.TrainerRegister.value.firstName,
      lastName: this.TrainerRegister.value.lastName,
      userName: this.TrainerRegister.value.userName,
      email: this.TrainerRegister.value.email,
      contactNumber: this.TrainerRegister.value.contactNumber,
      password: this.TrainerRegister.value.Passwords.password,
      linkedinUrl: this.TrainerRegister.value.linkedinUrl,
      yearOfExperience: this.TrainerRegister.value.yearOfExperience,
      trainerTechnology: this.TrainerRegister.value.trainerTechnology,
      role: 2
    };

    alert(JSON.stringify(this.TrainerRegister.value));
    this.auth.saveUser(result).subscribe(data =>
      {
        if(data.message == "Registered Successfully")
        {
          alert(data.message);
          this.router.navigate(['login']);
        }
        else if( data.message == "Email Not Registered")
        {
          alert(data.message);
          this.router.navigate(['trainer-register']);
        }
      });
    }
    
  onReset() {
    this.submitted = false;
    this.TrainerRegister.reset();
  }
}
