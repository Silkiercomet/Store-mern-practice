const Logo = (props) => {
  return (
    <>
    <header className="main__header">
      <svg width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#ffffff" />
        <path d="M20,10 L40,40 L60,10" stroke="#6ab04c" stroke-width="4" fill="none" />
        <path d="M80,10 L100,40 L120,10" stroke="#6ab04c" stroke-width="4" fill="none" />
        <path d="M140,10 L160,40 L180,10" stroke="#6ab04c" stroke-width="4" fill="none" />
        <text x="10" y="38" font-size="30" fill="#6ab04c" font-weight="bold">EcOmercer</text>
      </svg>
    </header>
    {props.children}
    </>
  )
}

export default Logo