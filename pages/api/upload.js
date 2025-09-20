import { writeFile } from 'fs/promises';
import { join } from 'path';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = formidable({});
    const [fields, files] = await form.parse(req);
    
    const imageFile = files.image?.[0];
    if (!imageFile) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    // Generate a unique filename
    const timestamp = Date.now();
    const originalName = imageFile.originalFilename;
    const extension = originalName.substring(originalName.lastIndexOf('.'));
    const filename = `car_${timestamp}${extension}`;

    // Define the path where the image will be saved
    const publicDir = join(process.cwd(), 'public');
    const imageDir = join(publicDir, 'images', 'cars');
    const filepath = join(imageDir, filename);

    // Ensure the directory exists
    await fs.mkdir(imageDir, { recursive: true });

    // Copy the file to the destination
    await fs.copyFile(imageFile.filepath, filepath);

    // Return the public path that will be stored in the database
    const publicPath = `/images/cars/${filename}`;
    res.status(200).json({ imagePath: publicPath });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
}
