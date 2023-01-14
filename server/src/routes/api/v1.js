import parsePageAction from '../../actions/api/v1/parse-page.js'

export default [
  {
    path: '/get-page',
    action: parsePageAction,
    method: 'get',
  }
]
