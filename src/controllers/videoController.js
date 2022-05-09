export const trending = (req, res) => res.render("home"); // 작명한 pug의 view로 naming한다. ex)'home.pug -> res.resnder("home")'
export const see = (req, res) => {
  return res.send(
    `<!DOCTYPE html><html lang='ko'><head><title>Newtube</title></head><body><h1>Watch video #${req.params.id}</h1><footer>&copy;2022 Newtube -  All rights reserved</footer></body></html>`
  );
};
export const edit = (req, res) => {
  return res.send(
    `<!DOCTYPE html><html lang='ko'><head><title>Newtube</title></head><body><h1>Edit video #${req.params.id}</h1><footer>&copy;2022 Newtube -  All rights reserved</footer></body></html>`
  );
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
