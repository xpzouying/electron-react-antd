import React from "react";
import { Card } from "antd";
import "./App.css";

const { Meta } = Card;

function App() {
  return (
    <div className="App">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="electron-react-antd"
            src="https://zyblog-1255449766.cos.ap-beijing.myqcloud.com/3152ecb1-f7a8-4a0b-a19f-207400b9c65d"
          />
        }
      >
        <Meta
          title="xpzouying@gmail.com"
          description="Electron With React and Antd"
        />
      </Card>
    </div>
  );
}

export default App;
