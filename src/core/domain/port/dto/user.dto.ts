export interface UserDTO {
  id: string;
  fullName: string;
  username: string;
  email?: string;
  phoneNum: string;
  createdAt?: Date;
  profilePicture: string;
  activationStatus: boolean;
}
