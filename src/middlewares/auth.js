const adminAuth = (req, res, next) => {
  console.log("admin auth is running");
  const token = "qwerty";
  const isAdminAuthorized = token === "qwerty";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized Acess");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
};
