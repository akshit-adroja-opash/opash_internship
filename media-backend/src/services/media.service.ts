import sharp from "sharp";

export const resizeImage = async (
  inputPath: string,
  outputPath: string
) => {
  await sharp(inputPath)
    .resize(500, 500)
    .toFile(outputPath);
};
