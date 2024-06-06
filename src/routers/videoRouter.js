import express from 'express';
import { see, edit, deleteVideo, upload } from '../controllers/videoController';

const videoRouter = express.Router();

// 작성시 순서가 중요함.
videoRouter.get('/upload', upload);
// 정규식으로 작성 가능함.
videoRouter.get('/:id(\\d+)', see);
videoRouter.get('/:id(\\d+)/edit', edit);
videoRouter.get('/:id(\\d+)/delete', deleteVideo);

export default videoRouter;
