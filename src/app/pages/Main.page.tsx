import Logo from "../components/Logo"
import Hi from "../components/Hi";

const img = '/logo.jpg';
const text= '¡Hola, soy desarrollador Backend con sede en Argentina!';

const Main = () => {
  return (
    <div className="grid grid-cols-1 mt-16">
      <Logo
        img={img}
      />
      <Hi />
    </div>
  )
}

export default Main
