import { NgModule } from '@angular/core';
import { UserDataModule } from './repository/user/user.module';

@NgModule({
  imports: [
    UserDataModule,
  ],
})
export class DataModule { }
