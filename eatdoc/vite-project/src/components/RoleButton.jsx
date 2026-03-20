import { useNavigate } from 'react-router-dom'

function RoleButton({ role, description }) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (role === 'Food Giver') {
      navigate('/giver')
    } else if (role === 'Food Receiver') {
      navigate('/receiver')
    }
  }

  return (
    <button className="role-button" onClick={handleClick}>
      <span className="role-title">{role}</span>
      <span className="role-description">{description}</span>
    </button>
  )
}

export default RoleButton