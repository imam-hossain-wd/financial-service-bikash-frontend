import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined} from '@ant-design/icons';
const ErrorElement = () => (
<div className='flex justify-center items-center'>
<Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist.."
    extra={<Button type="primary" className=' text-md text-white w-32 h-10 flex justify-center items-center ml-14 '><Link to="/"><HomeOutlined className="mr-1" /> Back Home</Link></Button>}
  />
</div>
);

export default ErrorElement;