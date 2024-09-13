
import { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {

  const element = useRef();

  console.log("useClick");
  useEffect(() => {
    console.log("useEffect");
    if (element.current) {
      element.current.addEventListener("click", onClick); //hover로 바꾸려면 'mouseenter'
    }
    return () => {
      console.log('remove')
        element.current.removeEventListener("click", onClick);
      
    };
  }, []);
  return   typeof onClick !== "function"? undefined: element; 
};
export default function App() {
  const [value, setValue] = useState(true);
  const sayHello = () => {
    console.log("helloo");
  };
  const title = useClick(sayHello);
  const onClick = () => {
    title.current = null;
    console.log(title.current);
    setValue(!value);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1 ref={title}>hi</h1>
      <button onClick={onClick}>button</button>
    </div>
  );
}
