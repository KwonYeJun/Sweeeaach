import express, { Request, Response } from "express";
import path from "path";
const root = path.join(__dirname, "..", ".."); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5
const rootPublic = path.join(root, "public"); //C:\Users\over9\KDT-2_FullStack\KDT-2-Project-A-5\public
const app = express();
app.use(express.static(root)); //root 디렉토리
app.use(express.static(rootPublic)); 

// app.get("*", (req: Request, res: Response) => {
//   res.type("text/html");
//   const test = path.join(__dirname,'../../public/index.html');
//   res.sendFile(test);
// });

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
