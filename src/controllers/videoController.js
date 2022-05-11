let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 59,
    id: 3,
  },
];
export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
// 작명한 pug의 view로 naming한다. ex)'home.pug -> res.resnder("home")'
// fakeUser: fakeUser는 ES6에서 fakeUser와 같다. ex) { pageTitle: "Home", fakeUser } = { pageTitle: "Home", fakeUser: fakeUser }
// pug로 변수를 보낼 수 있다 ex){pageTitle: ""}
export const watch = (req, res) => {
  const { id } = req.params; // ES6에서 const id = req.params.id; 를 const { id } = req.params; 로 쓸 수 있다.
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
