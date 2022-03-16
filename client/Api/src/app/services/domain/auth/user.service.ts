import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { UserController } from './user.controller.service';
import { UserDTO } from './user/user';
import { toUser } from './user/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private controller: UserController) {}

  login(name: string, password: string): Observable<UserDTO> {
    return this.controller.login({ name, password }).pipe(
      map((response: UserDTO) => {
        return response ? toUser(response) : null;
      })
    );
  }

  register(name: string, password: string): Observable<UserDTO> {
    return this.controller.register({ name, password }).pipe(
      map((response: UserDTO) => {
        return response ? toUser(response) : null;
      })
    );
  }
}
