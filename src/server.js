import express from 'express';
import morgan from 'morgan'; // log package
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const PORT = 4000;
const app = express();
const logger = morgan('dev');
//app.use(gossipmiddleware);  어느 URL에서도 작동하는 미들웨어를 사용할때 사용 java 의 AOP
app.use(logger);

app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

// const home = (req, res) => {
//     // return res.end(); 연결 종료
//     return res.send('is Home');
// };

// app.get('/', home); // java 의 Controller

const handleListening = () => console.log(`Server Start!! PORT: ${PORT}`);

app.listen(PORT, handleListening);
