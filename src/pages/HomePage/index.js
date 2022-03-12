import React from 'react';
import DefaultFooter from '../../components/DefaultFooter';
import DefaultHeader from '../../components/DeafultHeader';

function HomePage() {
  return (
    <div className="homepage-container">
      <DefaultHeader username="Itallo" />
      <DefaultFooter />
    </div>
  );
}

export default HomePage;
