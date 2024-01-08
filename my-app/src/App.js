import logo from './logo.svg';
import './App.css';

// 리액트에서 사용자 정의 태그를 만들 때는 반드시 대문자로 시작
function Header() {
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>
}

function Nav() {
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">js</a></li>
    </ol>
  </nav>
}

function Article() {
  return <article>
    <h2>Welcome</h2>
    Hello, WEB
  </article>
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
