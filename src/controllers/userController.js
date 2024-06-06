const join = (req, res) => res.send('Join');
const edit = (req, res) => res.send('Edit User');
const remove = (req, res) => res.send('Remove User');
const login = (req, res) => res.send('login Here!');
const logout = (req, res) => res.send('Bye Bye');
const see = (req, res) => res.send('User Info');

export { join, edit, remove, login, logout, see };
