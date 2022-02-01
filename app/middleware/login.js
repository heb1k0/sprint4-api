module.exports.islogin = (req, res, next) => {
  try {
    if (!req.headers.username && !req.headers.password) {
      throw 'Invalid user ID';
    } else {
      req.headers.username == "demo" && req.headers.password == "demo" ? next() : res.status(401).json({ error: "Invalid user ID" });
    }
  } catch(err) {
    res.status(401).json({
      error: err
    });
  }
};