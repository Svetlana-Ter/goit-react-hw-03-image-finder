import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import LoaderSpinner from 'react-loader-spinner';

export default function Loader() {
  return (
    <LoaderSpinner
      className='Loader'
      type='Puff'
      color='#00BFFF'
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
