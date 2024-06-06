const trending = (req, res) => res.send('isHome');
const see = (req, res) => res.send('Watch Video');
const edit = (req, res) => res.send('Edit Video');
const search = (req, res) => res.send('search Video');
const upload = (req, res) => res.send('upload Video');
const deleteVideo = (req, res) => res.send('delete Video');

export { trending, see, edit, search, upload, deleteVideo };
