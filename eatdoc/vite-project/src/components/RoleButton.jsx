function RoleButton({ role, description }) {
  const handleClick = () => {
    alert(`You selected ${role}`)
  }

  return (
    <button className="role-button" onClick={handleClick}>
      <span className="role-title">{role}</span>
      <span className="role-description">{description}</span>
    </button>
  )
}

export default RoleButton