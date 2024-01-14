import logo from './logo.svg';
import './App.css';

// Header, Nav, Article = 함수형 컴포넌트
function Header(props) {
  console.log('props', props, props.title);    // props객체를 콘솔에 출력함(디버깅 목적)
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}  // JSX(JavaScript Xml) : 리액트에서 HTML 작성하는 방식 의미

function Nav(props) {
  const lis = []
  for(let i = 0; i < props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'read/' + t.id}>{t.title}</a></li>)   // 동적으로 만들어주는 태그 
  }
  return <nav>
    <ol>
      {lis}
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
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ]
  return (
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>    {/* "topics"가 아니라 {}로 하면 문자열이 아니라 있는 그대로 전달됨. */}
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;