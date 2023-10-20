import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserTokens } from './token';
import { UserRepositoryAdapter } from './user.repository';
import { UserLoginService } from 'src/core/services/auth/login.service';

const persistenceProviders: Provider[] = [
  {
    provide: UserTokens.UserRepository,
    useClass: UserRepositoryAdapter
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: UserTokens.LoginUseCase,
    useFactory: UserLoginService,
    deps: [UserRepositoryAdapter]
  }
];

@NgModule({
  providers: [
    ...persistenceProviders,
    ...useCaseProviders,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class UserDataModule { }
