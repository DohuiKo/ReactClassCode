import DiaryEditor from "./DiaryEditor";
import DiaryList from './DiaryList';
import './App.css';

const dummyList = [
  {
    id:1,
    author:"고도희",
    content:"하이 1",
    emotion:1,
    created_date: new Date().getTime() // 생성자에 아무것도 넣지 않고..
  },
  {
    id:2,
    author:"아무개",
    content:"하이 1",
    emotion:1,
    created_date: new Date().getTime() // 생성자에 아무것도 넣지 않고..
  },
  {
    id:3,
    author:"아무러니",
    content:"하이 1",
    emotion:1,
    created_date: new Date().getTime() // 생성자에 아무것도 넣지 않고..
  },
  {
    id:4,
    author:"호호",
    content:"하이 1",
    emotion:1,
    created_date: new Date().getTime() // 생성자에 아무것도 넣지 않고..
  },
]

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList = {dummyList}/>
    </div>
  );
};
export default App;
