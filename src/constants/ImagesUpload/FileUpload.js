import React, { useState } from 'react';
import useS3Upload from './useS3Upload';

const allowedTypes = [
  'image/jpeg',
  'image/png',
  'application/pdf',
  'video/mp4',
  'video/quicktime',
  'audio/mpeg',
  'audio/wav',
  // Add more supported types as needed
];

const FileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const { uploadFile, uploading } = useS3Upload();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (allowedTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      alert('Invalid file type. Supported types are: ' + allowedTypes.join(', '));
    }
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const url = await uploadFile(file);
        alert('File uploaded successfully.');
        onUpload(url); // Notify parent component of the uploaded file URL
      } catch (error) {
        alert('Error uploading file: ' + error.message);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload File'}
      </button>
    </div>
  );
};

export default FileUpload;
