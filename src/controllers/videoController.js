export const trending = (req, res) => {
  const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return res.render("home", { pageTitle: "Home", videos });
};
// 작명한 pug의 view로 naming한다. ex)'home.pug -> res.resnder("home")'
// fakeUser: fakeUser는 ES6에서 fakeUser와 같다. ex) { pageTitle: "Home", fakeUser } = { pageTitle: "Home", fakeUser: fakeUser }
// pug로 변수를 보낼 수 있다 ex){pageTitle: ""}
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
