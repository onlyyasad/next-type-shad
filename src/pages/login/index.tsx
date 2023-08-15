import Header from '@/components/Header/Header';
import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <h1>Login here</h1>
        </div>
    );
};

LoginPage.getLayout = function getLayout(page) {
    return (
      <>
      <Header/>
      {page}
      </>
    )
}

export default LoginPage;