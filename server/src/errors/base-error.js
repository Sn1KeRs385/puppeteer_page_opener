export default class BaseError extends Error {
  code = 500

  constructor(message = undefined) {
    super(message || 'Server error')
  }
}
