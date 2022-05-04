import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { useState } from 'react';
import './index.scss';

export const Auth = () => {
  const [authSelect, setAuthSelect] = useState<boolean>(true);
  
  return (
    <div className='auth-container'>
      <div className='auth'>
        <div className='auth-select'>
          <button style={authSelect ? { background : 'white', color: 'black'} : {}} onClick={()=>setAuthSelect(true)}>Вход</button>
          <button style={!authSelect ? { background : 'white', color: 'black'} : {}} onClick={()=>setAuthSelect(false)}>Регистрация</button>
        </div>
        {authSelect ? <SignIn/> : <SignUp/>}
      </div>
    </div>
  );
};