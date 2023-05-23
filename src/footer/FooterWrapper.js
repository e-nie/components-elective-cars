import FooterMenu from "./FooterMenu";
import Contacts from "./Contacts";

function FooterWrapper() {
  return (

    <div style={{display: 'flex', justifyContent: 'space-around', paddingTop: '25px'}}>
      <FooterMenu/>
      <Contacts/>
    </div>
  );
}

export default FooterWrapper;