import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

import { BackendService } from "./shared/backend.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {  console.log("aqui 2") }

  canActivate() {
    if (BackendService.isLoggedIn()) {
      console.log("aqui")
      return true;
     
    }
    else {
      this.router.navigate(["/login"]);
      console.log("aqui no")

      return false;
    }
  }
}
