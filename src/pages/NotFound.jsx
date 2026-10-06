function NotFound() {
  const onClick = () => {
    window.location.href = '/';
  };
  
  return (
    <>
      <h1>Page not found</h1>
      <button onClick={onClick}>Back to home</button>
    </>
  )
}

export default NotFound
