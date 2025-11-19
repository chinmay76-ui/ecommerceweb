const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`;

const uploadImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", "mern_product"); // ensure exact name, no spaces

    const res = await fetch(url, {
      method: "POST",
      body: formData,
      // IMPORTANT: do NOT set headers like 'Content-Type' here
    });

    const data = await res.json();

    if (!res.ok) {
      // log full Cloudinary response so you know exactly why it returned 400
      console.error("Cloudinary upload failed:", data);
      throw new Error(data.error ? data.error.message : "Cloudinary upload failed");
    }

    return data; // successful upload JSON
  } catch (err) {
    console.error("Upload error:", err);
    throw err;
  }
};

export default uploadImage;
