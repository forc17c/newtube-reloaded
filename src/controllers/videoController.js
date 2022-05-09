export const trending = (req, res) => res.render("home"); // 작명한 pug의 view로 naming한다. ex)'home.pug -> res.resnder("home")'
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
