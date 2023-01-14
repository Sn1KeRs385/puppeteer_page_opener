export default async (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  res.status(err.code || 500)

  res.json({ error: err.message })

  next()
}
