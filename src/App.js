import logo from './logo.svg';
import './App.css';

// Header, Nav, Article = 함수형 컴포넌트
function Header(props){
  console.log('props', props, props.title);    // props객체를 콘솔에 출력함(디버깅 목적)
  return <header>                    
    <h1><a href="/">{props.title}</a></h1>   
  </header>
}   // JSX(JavaScript Xml) - 리액트에서 HTML 작성하는 방식 의미

function Nav(){
  return <nav>
    <ol>
      <li><a href="/read/1">html</a></li>
      <li><a href="/read/2">css</a></li>
      <li><a href="/read/3">javascript</a></li>
    </ol>
  </nav>
}

function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  return (
    <div>
      <Header title="WEB"></Header>
      <Nav></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}
 
export default App;