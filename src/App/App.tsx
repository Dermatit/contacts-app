import './App.css';
import { Auth } from '../Auth/index';
import { ContactsPage } from '../Contacts';
import { useSelector } from 'react-redux';
import { IReduxState } from '../Redux/types';

export const App: React.FC = () => {
  const isAuth = useSelector((state: IReduxState) => state.isAuth);
  
  return (
    <main>
      {isAuth ? <ContactsPage/> : <Auth/>}
    </main>
  );
}
