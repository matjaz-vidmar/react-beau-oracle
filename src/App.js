import './App.css';
import './images/20220612_181641.jpg';
import React, { useState } from 'react';
import style from './style.css';

function App() {
  const [text, setText] = useState('much wow');

  return (
    <div>
      <div></div>
      <br />
      <header>
        <strong>Beau Oracle</strong>
      </header>
      <section>
        <div>
          <label>
            Ask Beau a question:
            <input type="text" name="name" />
          </label>
          <input
            onClick={() => {
              const answers = [
                'So smart',
                'I love kimchi',
                'I hate cone',
                'play in park',
                'Such philosophy',
                'Me wants kimchi',
                'I gud boy',
                'Run natur',
                'Gib treat',
                'Go woof woof',
                'Unicorn fetch',
                'Squirel!',
                'much wow',
                'I puke your car',
              ];
              setText(answers[Math.floor(Math.random() * answers.length)]);
            }}
            type="submit"
            value="Submit"
          />
        </div>
      </section>
      <div>
        <img src={require('./images/20220612_181641.jpg')} />
      </div>
      <label
        value={text}
        onChange={(event) => {
          setText(event.currentTarget.value);
        }}
      >
        Beau's answer: <br />
        {text}
      </label>
      <div></div>
    </div>
  );
}

export default App;
