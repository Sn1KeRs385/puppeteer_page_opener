import puppeteer from 'puppeteer'

let browser = undefined

const launchBrowser = async () => {
  browser = await puppeteer.launch()
}

export { launchBrowser, browser }
