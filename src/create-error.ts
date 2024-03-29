import * as errors from 'restify-errors';

const errrorCodes = [
  400, // - BadRequestError
  401, // - UnauthorizedError
  402, // - PaymentRequiredError
  403, // - ForbiddenError
  404, // - NotFoundError
  405, // - MethodNotAllowedError
  406, // - NotAcceptableError
  407, // - ProxyAuthenticationRequiredError
  408, // - RequestTimeoutError
  409, // - ConflictError
  410, // - GoneError
  411, // - LengthRequiredError
  412, // - PreconditionFailedError
  413, // - RequestEntityTooLargeError
  414, // - RequesturiTooLargeError
  415, // - UnsupportedMediaTypeError
  416, // - RangeNotSatisfiableError (node >= 4)
  416, // - RequestedRangeNotSatisfiableError (node 0.x)
  417, // - ExpectationFailedError
  418, // - ImATeapotError
  422, // - UnprocessableEntityError
  423, // - LockedError
  424, // - FailedDependencyError
  425, // - UnorderedCollectionError
  426, // - UpgradeRequiredError
  428, // - PreconditionRequiredError
  429, // - TooManyRequestsError
  431, // - RequestHeaderFieldsTooLargeError
  500, // - InternalServerError
  501, // - NotImplementedError
  502, // - BadGatewayError
  503, // - ServiceUnavailableError
  504, // - GatewayTimeoutError
  505, // - HttpVersionNotSupportedError
  506, // - VariantAlsoNegotiatesError
  507, // - InsufficientStorageError
  509, // - BandwidthLimitExceededError
  510, // - NotExtendedError
  511, // - NetworkAuthenticationRequiredError
];

export = function createRandomError() {
  const index = Math.floor(Math.random() * errrorCodes.length);
  const code = errrorCodes[index];
  const error = errors.makeErrFromCode(code);
  return error;
};
