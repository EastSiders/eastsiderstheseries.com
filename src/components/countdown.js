import React, { Component /*, useState, useEffect*/ } from "react"
import PropTypes from "prop-types"
import { Statistic } from "semantic-ui-react"
import styled from "styled-components"

const Wrapper = styled.div`
color: #fff !important;
display: grid
grid-gap: 2rem;
grid-auto-columns: min-content;
grid-auto-flow: column;

.ui.statistic {
  margin: 0 !important;
}
`

/*
const Countdown = ({ date }) => {
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const myDate = calculateCountdown(date)
      myDate ? setCountDown(myDate) : clearInterval(interval)
    }, 1000)

    return () => clearInterval(interval)
  })

  const calculateCountdown = endDate => {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000

    // clear countdown when date is reached
    if (diff <= 0) return false

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    }

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = diff

    return timeLeft
  }

  const addLeadingZeros = value => {
    value = String(value)
    while (value.length < 2) {
      value = "0" + value
    }
    return value
  }

  return (
    <Container>
      <Column>
        <Element>
          <strong>{addLeadingZeros(countDown.days)}</strong>
          <span>{countDown.days === 1 ? "Day" : "Days"}</span>
        </Element>
      </Column>

      <Column>
        <Element>
          <strong>{addLeadingZeros(countDown.hours)}</strong>
          <span>Hours</span>
        </Element>
      </Column>

      <Column>
        <Element>
          <strong>{addLeadingZeros(countDown.min)}</strong>
          <span>Min</span>
        </Element>
      </Column>

      <Column>
        <Element>
          <strong>{addLeadingZeros(countDown.sec)}</strong>
          <span>Sec</span>
        </Element>
      </Column>
    </Container>
  )
}*/

class Countdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date)
      date ? this.setState(date) : this.stop()
    }, 1000)
  }

  componentWillUnmount() {
    this.stop()
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000

    // clear countdown when date is reached
    if (diff <= 0) return false

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    }

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = diff

    return timeLeft
  }

  stop() {
    clearInterval(this.interval)
  }

  addLeadingZeros(value) {
    value = String(value)
    while (value.length < 2) {
      value = "0" + value
    }
    return value
  }

  render() {
    const countDown = this.state

    return (
      <Wrapper>
        <Statistic
          inverted
          label={countDown.days === 1 ? "Day" : "Days"}
          value={this.addLeadingZeros(countDown.days)}
          size="tiny"
        />
        <Statistic
          inverted
          label={countDown.hours === 1 ? "Hour" : "Hours"}
          value={this.addLeadingZeros(countDown.hours)}
          size="tiny"
        />
        <Statistic
          inverted
          label={countDown.min === 1 ? "Minute" : "Minutes"}
          value={this.addLeadingZeros(countDown.min)}
          size="tiny"
        />
        <Statistic
          inverted
          label={countDown.sec === 1 ? "Second" : "Seconds"}
          value={this.addLeadingZeros(countDown.sec)}
          size="tiny"
        />
      </Wrapper>
    )
  }
}

Countdown.propTypes = {
  date: PropTypes.string.isRequired,
}

Countdown.defaultProps = {
  date: new Date(),
}

export default Countdown
