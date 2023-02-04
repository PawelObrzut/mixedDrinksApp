import './Button.css';

const Button = ({ title, action, className }) => {
  return (
    <button className={className} onClick={action}>
      { title }
    </button>
  )
}

export default Button