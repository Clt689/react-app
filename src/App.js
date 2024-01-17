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
    <h1><a href="/" onClick={(event) => {
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
      <a id={t.id} href={'read/' + t.id} onClick={event => {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>)   // 동적으로 만들어주는 태그 
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}

function Create(props) {
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=>{
      event.preventDefault();         // create를 눌러 제출할 때, reload가 일어나지 않게 하기 위함.
      const title = event.target.title.value;    // 이벤트가 발생한 타겟 => <form>태그를 가리킴    
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type="text" name="title" placeholder='title' /></p>   {/* 제목 */}
      <p><textarea name="body" placeholder='body'></textarea></p>    {/* 본문 */}
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}

function App() {                         // useState의 인자(='WELCOME')는 state의 초기값 = 0번쨰 인덱스의 값 = mode
  // const _mode = useState('WELCOME');     // 일반 지역변수지만, state'상태'로 업그레이드
  // const mode = _mode[0];       // 배열의 0번째 => 상태의 값을 읽을 때 사용 / 1번째 => 상태의 값을 변경할 때 사용
  // console.log('_mode', _mode);
  const [mode, setMode] = useState('WELCOME');   // 위 3줄과 같은 코드
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ]);
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => {
      const newTopic = {id:nextId, title:_title, body:_body};
      topics.push(newTopic);
      setTopics(topics);
    }}></Create>  // Create는 꽤 복잡한 UI를 갖고있기 때문에, 별도의 컴포넌트<Create>로 만듦
  }
  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode('READ');
        setId(_id);
      }}></Nav>    {/* "topics"가 아니라 {}로 하면 문자열이 아니라 있는 그대로 전달됨. */}
      {content}
      <a href="/create" onClick={event => {
        event.preventDefault();
        setMode('CREATE');
      }}>Create</a>
    </div>
  );
}

export default App;