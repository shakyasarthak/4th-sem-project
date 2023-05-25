import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppProvider } from '@/components/context_q'
import Quiz19 from './Quiz_q';

const Quiz_final = () => {
  return (
    <React.StrictMode>
    <AppProvider>
      <Quiz19/>
    </AppProvider>
  </React.StrictMode>
  )
}

export default Quiz_final