import React, { useRef, useState } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from './DiaryList';
import './App.css';

/*const dummyList = [
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
] */

const App = () => {
  const [data, setData] = useState([]);

  const dataId = useRef(0)

  const onCreate = (author, content,  emotion)=> {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    console.log(newDiaryList);
    setData(newDiaryList);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate = {onCreate} />
      <DiaryList onDelete={onDelete} diaryList = {data}/>
    </div>
  );
};
export default App;
