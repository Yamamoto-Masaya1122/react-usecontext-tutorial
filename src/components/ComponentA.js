import { useCountContext } from '../context/CountContext';
import ComponentB from './ComponentB';

const ComponentA = () => {
  console.log('ComponentA Re-Render');
  const { count, setCount } = useCountContext();

  return(
    <div>
      <p>Component A</p>
      <ComponentB />
    </div>
  );
}

export default ComponentA