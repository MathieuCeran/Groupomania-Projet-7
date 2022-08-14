const UserModel = require("../models/user.models");
const fs = require("fs");

exports.uploadProfil = (req, res) => {
  if (req.file != null) {
    UserModel.User.findOne({ id: req.params.id })
      .then((user) => {
        const filename = user.media.split("/medias/")[1];
        fs.unlink(`images/upload/${filename}`, (err) => {
          UserModel.User.update(
            {
              media: `${req.protocol}://${req.get("host")}/images/upload/${
                req.file.filename
              }`,
            },
            { where: { id: req.params.id } }
          ).then(() => {
            res.status(200).json({ message: "Profil modifié" });
          });
        });

        //   UserModel.User.update(
        //     { _id: req.body.id },
        //     {$set: {
        //            media: `${req.protocol}://${req.get("host")}/images/upload/${
        //           req.file.filename
        //         }`,
        //       },
        //     }
        //   )
        //     .then((user) => res.status(200).json({ message: "success" }))
        //     .catch((err) =>
        //       res.satust(400).json({ error: err, message: "error" })
        //     );
        // });
      })
      .catch((err) => res.status(500).json(err));
  }
};
