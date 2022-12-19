import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';

function App() {
  let users = [{id:1,name:"Elnur",age:"21",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"},
  {id:2,name:"Ferid",age:"19",src:"https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"},
  {id:3,name:"Ferid",age:"19",src:"https://st2.depositphotos.com/1000423/7693/i/600/depositphotos_76937387-stock-photo-i-am-strong-enough.jpg"}]
  return (
    <>
    <Navbar/>
    {users.map((item)=>{
     return  <Welcome key={item.id} name={item.name} age={item.age} src={item.src} />;
    })}
    <Footer/>
    </>
    
  );
}

export default App;
