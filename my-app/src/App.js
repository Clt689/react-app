import logo from './logo.svg';
import './App.css';

// 리액트에서 사용자 정의 태그를 만들 때는 반드시 대문자로 시작
function Header(props) {
  console.log('props', props, props.title);
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = [
    <li><a href="/read/1">html</a></li>,
    <li><a href="/read/2">css</a></li>,
    <li><a href="/read/3">js</a></li>
  ]
  for( let i = 0; i < props.topics.length; i++){
    let t = pros.topics[i];
    lis.push(<li><a href={'/read/'+t.id}>{t.title}</a></li>)

  }
  return <nav>
    <ol>
      {lis.topics[1]},

    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const topics = [
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ]
  return (
    <div>
      <Header title="REACT"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

// 리액트는 속성을 PROP이라고 함.
export default App;
