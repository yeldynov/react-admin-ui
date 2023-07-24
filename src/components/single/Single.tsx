import './single.scss';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Single = () => {
  return (
    <div className='single'>
      <div className='view'>
        <div className='info'>
          <div className='topInfo'>
            <img
              src='https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
              alt=''
            />
            <h1>John Doe</h1>
            <button>Update</button>
          </div>
          <div className='details'>
            <div className='item'>
              <span className='itemTitle'>Username:</span>
              <span className='itemValue'>John Doe</span>
            </div>
            <div className='item'>
              <span className='itemTitle'>Username:</span>
              <span className='itemValue'>John Doe</span>
            </div>
            <div className='item'>
              <span className='itemTitle'>Username:</span>
              <span className='itemValue'>John Doe</span>
            </div>
            <div className='item'>
              <span className='itemTitle'>Username:</span>
              <span className='itemValue'>John Doe</span>
            </div>
          </div>
        </div>
        <div className='chart'>
          <ResponsiveContainer width='99%' height='100%'>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type='monotone'
                dataKey='pv'
                stroke='#8884d8'
                activeDot={{ r: 8 }}
              />
              <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className='activities'>
        <h2>Latest Activities</h2>
        <ul>
          <li>
            <div>
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 days ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 days ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 days ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>John Doe purchased Playstation 5 Digital Edition</p>
              <time>3 days ago</time>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Single;
