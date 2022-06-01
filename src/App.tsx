import type { Component } from 'solid-js';

import styles from './App.module.css';
import partyButton from './components/party-button';

const App: Component = () => {
  return (
    <div class={styles.App}>
      {partyButton}
    </div>
  );
};

export default App;
