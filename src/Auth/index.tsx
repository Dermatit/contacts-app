import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { useState } from 'react';

export const Auth = () => {
  const [authSelect, setAuthSelect] = useState<boolean>(true);
  
  return (
    <main>
      <div className='authSelect'>
        <button onClick={()=>setAuthSelect(true)}>Вход</button>
        <button onClick={()=>setAuthSelect(false)}>Регистрация</button>
      </div>
      {authSelect ? <SignIn/> : <SignUp/>}
    </main>
  );
}