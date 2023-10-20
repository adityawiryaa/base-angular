import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserMapper } from './mapper/user.mapper';
import { UserRepositoryPort } from 'src/core/domain/port/repository/user-repostiory.port';
import { UserModels } from './models/user.models';
import { UserDTO } from 'src/core/domain/port/dto/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UserRepositoryAdapter extends UserRepositoryPort {
  userMapper = new UserMapper();

  constructor(private http: HttpClient) {
    super();
  }

  login(params: { username: string, password: string }): Observable<UserDTO> {
    return this.http
      .post<UserModels>('https://example.com/login', { params })
      .pipe(map(this.userMapper.mapFrom));
  }
  register(params: { phoneNum: string, password: string }): Observable<UserDTO> {
    return this.http
      .post<UserModels>('https://example.com/register', { params })
      .pipe(map(this.userMapper.mapFrom));
  }
  getUserProfile(): Observable<UserDTO> {
    return this.http.get<UserModels>('https://example.com/user').pipe(
      map(this.userMapper.mapFrom));
  }
}
