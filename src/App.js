import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ul>
      <li>item asasas 1</li>
      <li>some other itme</li>
      <li>item as 3</li>
    </ul>
  );
}

function test(){
  return (
    <div>
      <h1>Hi. This is your boy Lakshay</h1>
      <p className="text">A text field lets the user enter text, either with hardware keyboard or with an onscreen keyboard.
      The text field calls the onChanged callback whenever the user changes the text in the field. If the user indicates that they are done typing in the field (e.g., by pressing a button on the soft keyboard), the text field calls the onSubmitted callback.
      To control the text that is displayed in the text field, use the controller. For example, to set the initial value of the text field, use a controller that already contains some text. The controller can also control the selection and composing region (and to observe changes to the text, selection, and composing region).
      By default, a text field has a decoration that draws a divider below the text field. You can use the decoration property to control the decoration, for example by adding a label or an icon. If you set the decoration property to null, the decoration will be removed entirely, including the extra padding introduced by the decoration to save space for the labels.
      If decoration is non-null (which is the default), the text field requires one of its ancestors to be a Material widget.</p>
      <ol>
        <li>Barcelona</li>
        <li>Australia</li>
        <li>China</li>
        <li>Japan</li>
      </ol>
    </div>
  )
}


export default test;


/**
 * <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 */