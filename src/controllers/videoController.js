const fakeUser = {
  username: "Nicolas",
  loggedIn: false,
};

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser }); // 작명한 pug의 view로 naming한다. ex)'home.pug -> res.resnder("home")'
// fakeUser: fakeUser는 ES6에서 fakeUser와 같다. ex) { pageTitle: "Home", fakeUser } = { pageTitle: "Home", fakeUser: fakeUser }
export const see = (req, res) => res.render("watch"); // pug로 변수를 보낼 수 있다 ex){pageTitle: ""}
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
