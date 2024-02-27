import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment } from "./redux/slice/counterSlice";

import { Button } from 'antd';
function App() {

  const {value} = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()

  return (
    <div>
      <Button type="primary">Primary Button</Button>
      <p>{value}</p>
      <h1 className="text-red-500">Hello world</h1>
      <button onClick={()=> dispatch(increment())}>
        increament
      </button>
    </div>
  );
}

export default App;
