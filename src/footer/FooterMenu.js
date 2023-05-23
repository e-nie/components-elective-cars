function FooterMenu() {
  const footerMenu = ['Customer Service', 'Careers', 'For investors', 'Partner Program', 'Policy']
  return (
    <div >
      <ul>
  {footerMenu.map((el, index)=> <h5 key={index}>{el}</h5>)}
</ul>
    </div>
  );
}

export default FooterMenu