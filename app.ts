import express, { Request, Response } from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname)));

app.get("*", (req: Request, res: Response) => {
  res.type("text/html");
  res.sendFile(__dirname + "/index.html");
});

// 404 페이지 작성
app.use((req: Request, res: Response) => {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

// 서버 포트 번호 이다.
app.listen(7777, () => {
  console.log(`연결 성공`);
});
