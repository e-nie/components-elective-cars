function MenuWrapper() {
  const menu = ['Home', 'All Cars', 'SUV only', 'Convertible', 'Economy', 'Electric']
  return (
    <div style={{ display: 'flex', width: '80%', margin: '0, auto'}}>
    <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', margin:'0, auto', paddingBottom: '25px'}}>
      {menu.map((el, i)=> <div key={i}>{el}</div>)}
    </div>
    </div>
  );
}

export default MenuWrapper;