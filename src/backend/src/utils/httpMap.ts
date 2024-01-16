const httpCodes = {
    success: 200,
    created: 201,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    conflict: 409,
    internalServerError: 500,
    notImplemented: 501,
    badGateway: 502,
    serviceUnavailable: 503,
    gatewayTimeout: 504,
    httpVersionNotSupported: 505,
};

export type HttpCode = keyof typeof httpCodes;
export type HttpCodeValue = typeof httpCodes[HttpCode];

const httpMap: (code: HttpCode) => HttpCodeValue = (code) => httpCodes[code];

export default httpMap;
