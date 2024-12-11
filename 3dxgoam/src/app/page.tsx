"use client";

import React, { useState } from 'react';
import Model from '@/app/components/model/model';

const HomePage: React.FC = () => {

  const [refresh, setRefresh] = useState<boolean>(false);

  return (
    <div>
      <div>
        <Model/>
      </div>
    </div>
  );
};

export default HomePage;