import { browser } from '../../../utils/puppeteer.js'
import boolParser from '../../../utils/bool-parser.js'
import ParamNotSetError from '../../../errors/param-not-set-error.js'

export default async (req, res) => {
  const link = req.query.link

  if (!link) {
    throw new ParamNotSetError('link')
  }

  req.timingRecorder.addTiming('ActionStart')

  const page = await browser.newPage()
  req.timingRecorder.addTiming('PageCreated')
  await page.goto(link)
  req.timingRecorder.addTiming('LinkOpened')

  let content = await page.content()
  req.timingRecorder.addTiming('ContentReceived')

  await page.close()
  req.timingRecorder.addTiming('PageClosed')

  if (boolParser(req.query.only_body)) {
    content = content.match(/<body[\s>]?[^]*<\/body>/gmui)[0]
    req.timingRecorder.addTiming('GetOnlyBody')
  }

  (req.query.remove_tags || []).forEach(removeTag => {
    content = content.replace(new RegExp(`<${removeTag}[\s>]?[^]*<\/${removeTag}>`, 'gmui'), '')
    req.timingRecorder.addTiming(`TagRemoved_${removeTag}`)
  })

  req.timingRecorder.addTiming('ActionEnd')
  res.json({ parsed_page: content })
}
