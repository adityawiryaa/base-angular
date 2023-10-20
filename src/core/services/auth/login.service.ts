import { UserDTO } from '@core/domain/port/dto/user.dto';
import { UserRepositoryPort } from '@core/domain/port/repository/user-repostiory.port';
import { LoginPort } from '@core/domain/port/service/auth/login.port';
import { UseCase } from '@lib/common';
import { Observable } from 'rxjs';

export class UserLoginService implements UseCase<LoginPort, UserDTO> {

  constructor(private userRepository: UserRepositoryPort) { }

  public execute(payload: LoginPort): Observable<UserDTO> {
    return this.userRepository.login(payload);
  }

}
