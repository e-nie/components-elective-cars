function Contacts() {
  const contacts = {
    name: 'Good Cars',
    phone: '323-232-23232',
  address: '34 West Str., 34 , CA',
  email: 'goodcars@gmail.com',
  }
  return (
    <div>
<h5>{contacts.name}</h5>
<h5>{contacts.phone}</h5>
<h5>{contacts.address}</h5>
<h5>{contacts.email}</h5>
    </div>
  );
}

export default Contacts;