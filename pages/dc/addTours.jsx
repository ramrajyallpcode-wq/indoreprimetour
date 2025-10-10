import { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const AddTourForm = () => {
  const [tourData, setTourData] = useState({
    name: "",
    description: "",
    from: "",
    to: "",
    dateFrom: "",
    dateTo: "",
    placesToVisit: "",
    numberOfDays: 0,
    numberOfNights: 0,
    numberOfSeats: 0,
  });
  const [tourImage, setTourImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const file = e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        setTourImage(file);
      } else if (file) {
        setError("Please select an image file");
      }
    } else {
      setTourData((prev) => ({
        ...prev,
        [name]: name.includes("number") ? Number(value) : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!tourImage) {
        throw new Error("Please select an image for the tour");
      }

      // Upload image first
      const formData = new FormData();
      formData.append("image", tourImage);

      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload image");
      }

      const { imagePath } = await uploadResponse.json();

      // Add tour with image path
      await addDoc(collection(db, "tours"), {
        ...tourData,
        imageLink: imagePath, // Store the local image path
      });

      alert("Tour added successfully!");
      setTourData({
        name: "",
        description: "",
        from: "",
        to: "",
        dateFrom: "",
        dateTo: "",
        placesToVisit: "",
        numberOfDays: 0,
        numberOfNights: 0,
        numberOfSeats: 0,
      });
      setTourImage(null);
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Error adding tour:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add New Tour</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Tour Name</label>
          <input
            type="text"
            name="name"
            value={tourData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={tourData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">From</label>
            <input
              type="text"
              name="from"
              value={tourData.from}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2">To</label>
            <input
              type="text"
              name="to"
              value={tourData.to}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Date From</label>
            <input
              type="date"
              name="dateFrom"
              value={tourData.dateFrom}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Date To</label>
            <input
              type="date"
              name="dateTo"
              value={tourData.dateTo}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2">Places to Visit</label>
          <input
            type="text"
            name="placesToVisit"
            value={tourData.placesToVisit}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block mb-2">Number of Days</label>
            <input
              type="number"
              name="numberOfDays"
              value={tourData.numberOfDays}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              min="0"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Number of Nights</label>
            <input
              type="number"
              name="numberOfNights"
              value={tourData.numberOfNights}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              min="0"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Number of Seats</label>
            <input
              type="number"
              name="numberOfSeats"
              value={tourData.numberOfSeats}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              min="0"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2">Tour Image</label>
          <input
            type="file"
            name="tourImage"
            onChange={handleChange}
            accept="image/*"
            className="w-full p-2 border rounded"
            required
          />
          {tourImage && (
            <p className="mt-2 text-sm text-gray-600">
              Selected file: {tourImage.name}
            </p>
          )}
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Adding Tour..." : "Add Tour"}
        </button>
      </form>
    </div>
  );
};

export default AddTourForm;
