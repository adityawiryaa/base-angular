import { Observable } from 'rxjs';
import { UserDTO } from '../dto/user.dto';

export abstract class UserRepositoryPort {
  abstract login(params: { username: string, password: string }): Observable<UserDTO>;
  abstract register(params: { phoneNum: string, password: string }): Observable<UserDTO>;
  abstract getUserProfile(): Observable<UserDTO>;
}
