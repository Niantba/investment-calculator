import image from '../assets/investment-calculator-logo.png';

export default function Header() {
  return (
    <header id="header">
      <img src={image} alt="money" />
      <h1>Investment Calculator</h1>
    </header>
  )
}
