import BaseError from './base-error.js'

export default class NotFoundError extends BaseError {
  code = 404

  constructor() {
    super('Not found')
  }
}
