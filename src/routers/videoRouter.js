import express from 'express';
import { see, getEdit, postEdit, getUpload, postUpload } from '../controllers/videoController';

const videoRouter = express.Router();

// 작성시 순서가 중요함.
//videoRouter.get('/upload', upload);
// 정규식으로 작성 가능함.
videoRouter.get('/:id(\\d+)', see);
videoRouter.route('/:id(\\d+)/edit').get(getEdit).post(postEdit);
//videoRouter.get('/:id(\\d+)/edit', getEdit);
//videoRouter.post('/:id(\\d+)/edit', postEdit);
videoRouter.route('/upload').get(getUpload).post(postUpload);

export default videoRouter;
