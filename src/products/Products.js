import Audi from '../images/1.jpeg';
import Toyota from '../images/2.jpeg';
import Saab from '../images/3.jpeg';
import Mercedes from '../images/4.jpeg';
import BMW from '../images/5.jpeg';
import MakeOrder from "./MakeOrder";


function Products() {
  const cars = [
    {
      id: '123',
      brand: 'Audi',
      year: '2019',
      price: 20000,
      img: Audi
    },
    {
      id: '456',
      brand: 'Toyota',
      year: '2019',
      price: 70000,
      img: Toyota
    },
    {
      id: '789',
      brand: 'Saab',
      year: '2019',
      price: 80000,
      img: Saab
    },
    {
      id: '4566',
      brand: 'Mercedes',
      year: '2019',
      price: 50000,
      img: Mercedes
    },
    {
      id: '9889',
      brand: 'BMW',
      year: '2019',
      price: 70000,
      img: BMW
    },
  ];

  return (
    <div style={{display: 'flex', justifyContent:'center'}}>
      <div style={{display: 'flex', width: '80%', justifyContent: 'space-between', alignItems: 'center'}}>

        {cars.map(el => <div key={el.id}>
          <img width="200px" height="150px" src={el.img} alt=""/>
          <h5>{el.brand} {el.year}</h5>
          <h5>Price: ${el.price}</h5>
          <MakeOrder/>
        </div>)}
      </div>
    </div>
  );
}

export default Products;