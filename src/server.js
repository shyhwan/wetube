import express from 'express';

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method}, ${req.url}`);
    next(); // 미들웨어로 작동하기 위해 작성 해야 함.
};

const handleHome = (req, res) => {
    // return res.end(); 연결 종료
    return res.send('is Home');
};

//app.use(gossipmiddleware);  어느 URL에서도 작동하는 미들웨어를 사용할때 사용 java 의 AOP
app.use(logger);

app.get('/', handleHome); // java 의 Controller

const handleListening = () => console.log(`Server Start!! PORT: ${PORT}`);

app.listen(PORT, handleListening);
