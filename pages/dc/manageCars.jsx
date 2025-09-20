import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const ManageCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const q = query(collection(db, "cars"));
        const querySnapshot = await getDocs(q);
        const carsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCars(carsData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching cars:", err);
        setError("Failed to load cars");
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this car?')) {
      try {
        await deleteDoc(doc(db, "cars", id));
        setCars(cars.filter(car => car.id !== id));
      } catch (err) {
        console.error("Error deleting car:", err);
        alert("Failed to delete car");
      }
    }
  };

  const handleEdit = (car) => {
    setEditingId(car.id);
    setEditForm(car);
    setNewImage(null); // Reset any previously selected image
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'file') {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        setNewImage(file);
      } else if (file) {
        alert('Please select an image file');
      }
    } else {
      setEditForm({
        ...editForm,
        [name]: type === 'checkbox' ? checked : 
                (name === 'taxiPriceAc' || name === 'taxiPriceNonAc') ? Number(value) : value
      });
    }
  };

  const handleUpdate = async (id) => {
    try {
      if (!editForm.carName || !editForm.carNumber || !editForm.taxiPriceAc || 
          !editForm.taxiPriceNonAc) {
        alert("Please fill in all fields");
        return;
      }

      let updatedImagePath = editForm.carPhotoLink; // Keep existing image path by default

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

      const carRef = doc(db, "cars", id);
      const updateData = {
        ...editForm,
        carPhotoLink: updatedImagePath,
      };
      delete updateData.id;
      
      await updateDoc(carRef, updateData);
      
      setCars(cars.map(car => 
        car.id === id ? { ...car, ...updateData } : car
      ));
      setEditingId(null);
      setNewImage(null);
    } catch (err) {
      console.error("Error updating car:", err);
      alert("Failed to update car: " + err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Manage Cars</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {cars && cars.length > 0 ? (
          cars.map((car) => (
            <div 
              key={car.id} 
              style={{ 
                border: '1px solid #ddd',
                padding: 20,
                borderRadius: 8
              }}
            >
              {editingId === car.id ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <input
                    type="text"
                    name="carName"
                    value={editForm.carName || ''}
                    onChange={handleEditChange}
                    placeholder="Car Name"
                    required
                  />
                  <input
                    type="text"
                    name="carNumber"
                    value={editForm.carNumber || ''}
                    onChange={handleEditChange}
                    placeholder="Car Number"
                    required
                  />
                  <input
                    type="number"
                    name="taxiPriceAc"
                    value={editForm.taxiPriceAc || ''}
                    onChange={handleEditChange}
                    placeholder="AC Price"
                    required
                  />
                  <input
                    type="number"
                    name="taxiPriceNonAc"
                    value={editForm.taxiPriceNonAc || ''}
                    onChange={handleEditChange}
                    placeholder="Non-AC Price"
                    required
                  />
                  
                  {/* Current image preview */}
                  <div style={{ marginTop: 10, marginBottom: 10 }}>
                    <p>Current Image:</p>
                    <img 
                      src={editForm.carPhotoLink} 
                      alt={editForm.carName}
                      style={{
                        maxWidth: '200px',
                        objectFit: 'cover',
                        borderRadius: '4px'
                      }}
                    />
                  </div>

                  {/* New image upload */}
                  <div>
                    <p>Upload New Image (optional):</p>
                    <input
                      type="file"
                      name="carPhoto"
                      accept="image/*"
                      onChange={handleEditChange}
                      style={{ marginBottom: 10 }}
                    />
                    {newImage && (
                      <p style={{ fontSize: '0.9em', color: '#666' }}>
                        New image selected: {newImage.name}
                      </p>
                    )}
                  </div>

                  <button 
                    onClick={() => handleUpdate(car.id)}
                    style={{
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      padding: '8px 15px',
                      borderRadius: 4,
                      cursor: 'pointer'
                    }}
                  >
                    Save
                  </button>
                  <button 
                    onClick={() => {
                      setEditingId(null);
                      setNewImage(null);
                    }}
                    style={{
                      backgroundColor: '#777',
                      color: 'white',
                      border: 'none',
                      padding: '8px 15px',
                      borderRadius: 4,
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <h3>Car Name: {car.carName}</h3>
                  <p>Car Number: {car.carNumber}</p>
                  <p>AC Price: ₹{car.taxiPriceAc}</p>
                  <p>Non-AC Price: ₹{car.taxiPriceNonAc}</p>
                  <img 
                    src={car.carPhotoLink} 
                    alt={car.carName} 
                    style={{
                      maxWidth: '200px',
                      marginTop: '10px',
                      objectFit: 'cover',
                      borderRadius: '4px'
                    }} 
                  />
                  <button
                    onClick={() => handleEdit(car)}
                    style={{
                      backgroundColor: '#2196F3',
                      color: 'white',
                      border: 'none',
                      padding: '8px 15px',
                      borderRadius: 4,
                      cursor: 'pointer',
                      marginRight: 10,
                      marginTop: 10
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(car.id)}
                    style={{
                      backgroundColor: '#ff4444',
                      color: 'white',
                      border: 'none',
                      padding: '8px 15px',
                      borderRadius: 4,
                      cursor: 'pointer'
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))
        ) : (
          <div>No cars found</div>
        )}
      </div>
    </div>
  );
};

export default ManageCars;
