import BaseError from './base-error.js'

export default class ParamNotSetError extends BaseError {
  code = 400

  constructor(paramName) {
    super(`Parameter "${paramName}" is not set`)
  }
}
