import { HttpCode } from '../utils/httpMap';

type ServiceError = {
    status: HttpCode;
    data: {
        error: {
            mensagem: string;
        };
    };
};

type ServiceSuccess<T> = {
    status: HttpCode;
    data: T;
};

type ServiceResponse<T> = ServiceError | ServiceSuccess<T>;

export default ServiceResponse;