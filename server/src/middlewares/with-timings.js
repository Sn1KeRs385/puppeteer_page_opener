import TimingRecorder from '../utils/timing-recorder.js'
import BoolParser from '../utils/bool-parser.js'

const resJsonInterceptor = (req, res, originJson) => (json) => {
  req.timingRecorder.addTiming('RequestEnd')

  if (BoolParser(req?.query?.with_timings) || BoolParser(req?.body?.with_timings)) {
    try {
      json.timings = req.timingRecorder.timigs
    } catch (error) {
    }
  }
  res.json = originJson
  res.json(json)
}


export default async (req, res, next) => {
  let timingRecorder = new TimingRecorder()
  timingRecorder.addTiming('RequestStart')

  req.timingRecorder = timingRecorder

  res.json = resJsonInterceptor(req, res, res.json)

  next()
}
