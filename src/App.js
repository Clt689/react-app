import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// Header, Nav, Article = 함수형 컴포넌트

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function Header(props) {
  console.log('props', props, props.title);    // props객체를 콘솔에 출력함(디버깅 목적)
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}  // JSX(JavaScript Xml) : 리액트에서 HTML 작성하는 방식 의미

function Nav(props) {
  const lis = []
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'read/' + t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a>
      </li>)   // 동적으로 만들어주는 태그 
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function App() {
  const _mode = useState('WELCOME');     // 일반 지역변수지만, state'상태'로 업그레이드
  console.log('_mode', _mode);
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ]
  let content = null;
  if ( mode === 'WELCOME'){
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if ( mode === 'READ'){
    content = <Article title="Read" body="Hello, Read"></Article>
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={()=>{
        mode = 'WELCOME';
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        mode = 'READ';
      }}></Nav>    {/* "topics"가 아니라 {}로 하면 문자열이 아니라 있는 그대로 전달됨. */}
      {content}
    </div>
  );
}

export default App;