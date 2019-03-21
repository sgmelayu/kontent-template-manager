import { environment } from '../environments/environment';

export abstract class BaseService {

    protected cmRequestDelay: number = environment.requestDelay;

}