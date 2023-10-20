import { Observable } from 'rxjs';

export interface UseCase<TUseCasePort, TUseCaseResult> {
  execute: (params: TUseCasePort) => Observable<TUseCaseResult>;
}
