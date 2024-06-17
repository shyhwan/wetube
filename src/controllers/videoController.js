// java의 service의 역할 비지니스 로직 작성
const videos = [
    {
        title: 'Hello',
        ratiing: 5,
        comments: 2,
        createdAt: '20 minutes ago',
        views: 59,
        id: 1,
    },
    {
        title: 'Scream',
        ratiing: 5,
        comments: 2,
        createdAt: '15 minutes ago',
        views: 987,
        id: 2,
    },
    {
        title: '기생충',
        ratiing: 5,
        comments: 2,
        createdAt: '10 minutes ago',
        views: 100,
        id: 3,
    },
];

/**
 * Home
 * @param {*} req
 * @param {*} res
 * @returns
 */
const trending = (req, res) => {
    return res.render('home', { pageTitle: 'Home', videos });
};

/**
 * Watch Video
 * @param {*} req
 * @param {*} res
 * @returns
 */
const see = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    res.render('watch', { pageTitle: `Watching Video ${video.title}`, video });
};

/**
 * Edit Video
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    res.render('edit', { pageTitle: `Editing: ${video.title}`, video });
};

/**
 * save change Video
 * @param {*} req
 * @param {*} res
 * @returns
 */
const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`);
};

/**
 * Search Video
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getUpload = (req, res) => {
    return res.render('upload', { pageTitle: `Upload Video` });
};

/**
 * Search Video
 * @param {*} req
 * @param {*} res
 * @returns
 */
const postUpload = (req, res) => {
    console.log(req.body.title);
    const { title } = req.body;
    const newVideo = {
        title,
        rating: 0,
        comments: 0,
        createdAt: 'just now',
        views: 0,
        id: videos.length + 1,
    };
    videos.push(newVideo);
    return res.redirect('/');
};

export { trending, see, getEdit, postEdit, getUpload, postUpload };
