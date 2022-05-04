import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { useState } from 'react';

export const Auth = () => {
  const [authSelect, setAuthSelect] = useState<boolean>(true);
  
  return (
    <div className='auth-container'>
      <div className='auth'>
        <div className='authSelect'>
          <button style={authSelect ? { background : 'white', color: 'black'} : {}} className='auth-select-button' onClick={()=>setAuthSelect(true)}>Вход</button>
          <button style={!authSelect ? { background : 'white', color: 'black'} : {}} className='auth-select-button' onClick={()=>setAuthSelect(false)}>Регистрация</button>
        </div>
        {authSelect ? <SignIn/> : <SignUp/>}
      </div>
    </div>
  );
}