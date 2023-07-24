import Single from '../../components/single/Single';
import './user.scss';

const User = () => {
  // Fetch data and send to Single Component
  return (
    <div className='user'>
      <Single />
    </div>
  );
};

export default User;
