import React from 'react';

const RegistrationPage = () => {
    return (
        <div>
            <h1>Registration Here</h1>
        </div>
    );
};

RegistrationPage.getLayout = function getLayout(page) {
    return (
      <>
      {page}
      </>
    )
}

export default RegistrationPage;