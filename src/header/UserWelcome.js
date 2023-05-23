function UserWelcome() {

  const user = {
    name: 'Eva',
    surname: 'Nie',

  }
  return (
    <div>
  <h3>Welcome, {user.name} </h3>
    </div>
  );
}

export default UserWelcome;