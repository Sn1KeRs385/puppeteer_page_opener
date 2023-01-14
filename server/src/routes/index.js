import apiV1Routes from './api/v1.js'

const routeMapper = (prefix) => (route) => {
  route.path = `/${prefix.replace(/^\/|\/$/g, '')}/${route.path.replace(/^\/|\/$/g, '')}`
  return route
}

export default [
  ...apiV1Routes.map(routeMapper('/api/v1/')),
]
