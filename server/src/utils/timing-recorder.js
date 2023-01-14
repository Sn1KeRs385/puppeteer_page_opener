class TimingRecorder {
  timigs = []

  getTimestampInSeconds() {
    return parseFloat((Date.now() / 1000).toFixed(2))
  }

  calcPassedTime(timestamp) {
    if (this.timigs.length === 0) {
      return 0
    }

    return parseFloat((timestamp - this.timigs[this.timigs.length - 1].timestamp).toFixed(2))
  }

  addTiming(name) {
    const timestamp = this.getTimestampInSeconds()

    this.timigs.push({
      name,
      timestamp,
      timePassed: this.calcPassedTime(timestamp),
    })
  }
}

export default TimingRecorder
