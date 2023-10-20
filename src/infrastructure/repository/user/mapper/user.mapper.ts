import { UserDTO } from 'src/core/domain/port/dto/user.dto';
import { UserModels } from '../models/user.models';
import { Mapper } from 'libs/common/usecase/mapper';

export class UserMapper extends Mapper<UserModels, UserDTO> {
  mapFrom(param: UserModels): UserDTO {
    return {
      id: param.id,
      fullName: param.name,
      username: param.userName,
      phoneNum: param.phoneNumber,
      profilePicture: param.userPicture,
      activationStatus: param.activationStatus
    };
  }
  mapTo(param: UserDTO): UserModels {
    return {
      id: param.id,
      name: param.fullName,
      userName: param.username,
      phoneNumber: param.phoneNum,
      userPicture: param.profilePicture,
      activationStatus: param.activationStatus
    }
  }
}
