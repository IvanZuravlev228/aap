import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Session} from "../model/Session";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient,
              private cookie: CookieService) { }

  public getSessionByOwner(page: number) {
    return this.http.get<Session[]>("http://91.207.183.142:8090/sessions/owner?page=" + page + "&size=25&sort=uploadTime,DESC",
      {
        headers: {
          "Authorization": "Bearer " + this.cookie.get("jwt-token")
        },
        withCredentials: true
      });
  }

  public deleteById(id: string) {
    return this.http.delete<void>("http://91.207.183.142:8090/sessions/" + id,
      {
        headers: {
          "Authorization": "Bearer " + this.cookie.get("jwt-token")
        },
        withCredentials: true
      });
  }
}
