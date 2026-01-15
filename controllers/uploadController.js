import cloudinary from "../utils/cloundinary.js";

export const uploadFile = (req, res, next) => {
  if (!file) {
    return res.status(401).json({
      message: "No File Uploaded",
    });
  }
  const stream = cloudinary.uploader.upload_stream(
    { filename: "showUpAyub", resource_type: "auto" },
    (error, result) => {
      if (error) return next(error);

      res.status(201).json({
        success: true,
        fileUlr: result.secure_url,
      });
    }
  );
  stream.end(req.file.buffer);
};
