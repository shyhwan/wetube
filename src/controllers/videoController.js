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
const edit = (req, res) => {
    res.render('edit', { pageTitle: 'Edit' });
};

/**
 * Search Video
 * @param {*} req
 * @param {*} res
 * @returns
 */
const search = (req, res) => {
    res.send('search Video');
};

/**
 * Update Video
 * @param {*} req
 * @param {*} res
 * @returns
 */
const upload = (req, res) => {
    res.send('upload Video');
};

/**
 * Delete Video
 * @param {*} req
 * @param {*} res
 * @returns
 */
const deleteVideo = (req, res) => {
    res.send('delete Video');
};

export { trending, see, edit, search, upload, deleteVideo };
