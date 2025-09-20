import { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';

const ManageTours = () => {
  const [tours, setTours] = useState([]);
  const [editingTour, setEditingTour] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    description: '',
    from: '',
    to: '',
    dateFrom: '',
    dateTo: '',
    placesToVisit: '',
    numberOfDays: 0,
    numberOfNights: 0,
    numberOfSeats: 0,
    imageLink: ''
  });
  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const toursCollection = collection(db, 'tours');
      const tourSnapshot = await getDocs(toursCollection);
      const tourList = tourSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTours(tourList);
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
  };

  const handleDelete = async (tourId) => {
    try {
      await deleteDoc(doc(db, 'tours', tourId));
      setTours(tours.filter(tour => tour.id !== tourId));
    } catch (error) {
      console.error("Error deleting tour:", error);
    }
  };

  const handleEdit = (tour) => {
    setEditingTour(tour.id);
    setEditFormData({
      name: tour.name,
      description: tour.description,
      from: tour.from,
      to: tour.to,
      dateFrom: tour.dateFrom,
      dateTo: tour.dateTo,
      placesToVisit: tour.placesToVisit,
      numberOfDays: tour.numberOfDays,
      numberOfNights: tour.numberOfNights,
      numberOfSeats: tour.numberOfSeats,
      imageLink: tour.imageLink
    });
    setNewImage(null);
    setError('');
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        setNewImage(file);
        setError('');
      } else if (file) {
        setError('Please select an image file');
      }
    } else {
      setEditFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleUpdate = async (tourId) => {
    setLoading(true);
    setError('');

    try {
      let updatedImagePath = editFormData.imageLink;

      // If there's a new image, upload it first
      if (newImage) {
        const formData = new FormData();
        formData.append('image', newImage);

        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!uploadResponse.ok) {
          throw new Error('Failed to upload new image');
        }

        const { imagePath } = await uploadResponse.json();
        updatedImagePath = imagePath;
      }

      const tourRef = doc(db, 'tours', tourId);
      const updateData = {
        ...editFormData,
        imageLink: updatedImagePath
      };
      
      await updateDoc(tourRef, updateData);
      
      setTours(tours.map(tour => 
        tour.id === tourId ? { ...tour, ...updateData } : tour
      ));
      
      setEditingTour(null);
      setNewImage(null);
    } catch (error) {
      console.error("Error updating tour:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Tours</h1>
      <div className="grid gap-4">
        {tours.map(tour => (
          <div key={tour.id} className="border p-4 rounded shadow">
            {editingTour === tour.id ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Description</label>
                    <textarea
                      name="description"
                      value={editFormData.description}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">From</label>
                    <input
                      type="text"
                      name="from"
                      value={editFormData.from}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">To</label>
                    <input
                      type="text"
                      name="to"
                      value={editFormData.to}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Date From</label>
                    <input
                      type="date"
                      name="dateFrom"
                      value={editFormData.dateFrom}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Date To</label>
                    <input
                      type="date"
                      name="dateTo"
                      value={editFormData.dateTo}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Places to Visit</label>
                    <input
                      type="text"
                      name="placesToVisit"
                      value={editFormData.placesToVisit}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Number of Days</label>
                    <input
                      type="number"
                      name="numberOfDays"
                      value={editFormData.numberOfDays}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Number of Nights</label>
                    <input
                      type="number"
                      name="numberOfNights"
                      value={editFormData.numberOfNights}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Number of Seats</label>
                    <input
                      type="number"
                      name="numberOfSeats"
                      value={editFormData.numberOfSeats}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  {/* Replace imageLink input with file upload */}
                  <div className="col-span-2">
                    <label className="block mb-2">Current Image</label>
                    <img 
                      src={editFormData.imageLink} 
                      alt={editFormData.name}
                      className="w-48 h-48 object-cover rounded mb-4"
                    />
                    
                    <label className="block mb-2">Upload New Image (optional)</label>
                    <input
                      type="file"
                      name="tourImage"
                      onChange={handleInputChange}
                      accept="image/*"
                      className="w-full p-2 border rounded"
                    />
                    {newImage && (
                      <p className="mt-2 text-sm text-gray-600">
                        New image selected: {newImage.name}
                      </p>
                    )}
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                  )}

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdate(tour.id)}
                      disabled={loading}
                      className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {loading ? 'Saving...' : 'Save'}
                    </button>
                    <button
                      onClick={() => {
                        setEditingTour(null);
                        setNewImage(null);
                        setError('');
                      }}
                      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold">{tour.name}</h2>
                <p className="text-gray-600">{tour.description}</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <p><strong>From:</strong> {tour.from}</p>
                  <p><strong>To:</strong> {tour.to}</p>
                  <p><strong>Date From:</strong> {tour.dateFrom}</p>
                  <p><strong>Date To:</strong> {tour.dateTo}</p>
                  <p><strong>Places to Visit:</strong> {tour.placesToVisit}</p>
                  <p><strong>Number of Days:</strong> {tour.numberOfDays}</p>
                  <p><strong>Number of Nights:</strong> {tour.numberOfNights}</p>
                  <p><strong>Number of Seats:</strong> {tour.numberOfSeats}</p>
                </div>
                <img src={tour.imageLink} alt={tour.name} className="mt-2 w-full h-48 object-cover rounded" />
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => handleEdit(tour)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(tour.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageTours;
