class indexPM {
  constructor(props) {
    this.props = props
  }

  shouldComponentUpdate(props) {
    this.props = props
    return true
  }

  /**
   * To validate phone numbers
   */
  validateNumber = message => (rule, value, callback) => {
    if (/^[+-]?\d+(\.\d+)?$/.test(value)) {
      callback()
    } else {
      callback(message)
    }
  }
}
export default indexPM
