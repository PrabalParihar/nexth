"use client"
import React, { useState } from 'react';
import axios from 'axios';

const PromptUploader: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [uploading, setUploading] = useState<boolean>(false);
  const [retrievedData, setRetrievedData] = useState<string>('');

  const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(event.target.value);
  };

  const retrieveFromPinata = async (cid: string) => {
    try {
      const gatewayUrl = `https://gateway.pinata.cloud/ipfs/${cid}`;

      const response = await axios.get(gatewayUrl);
      setRetrievedData(JSON.stringify(response.data, null, 2));
      
      console.log("Retrieved Data:", response.data); // Logging retrieved data
    } catch (error:any) {
      console.error("Error retrieving data:", error); // Logging any errors
    }
  };

  const uploadToPinata = async () => {
    setUploading(true);
    try {
      const pinataUrl = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
      const pinataApiKey = "7a12d189e152acaa686c";
      const pinataSecretApiKey = "915973e77af2cf16f1918ac336d09dea2f9217f8a10424613c12b5ff19c063fb";
  
      const response = await axios.post(
        pinataUrl,
        { prompt },
        {
          headers: {
            pinata_api_key: pinataApiKey,
            pinata_secret_api_key: pinataSecretApiKey,
          },
        }
      );
  
      console.log("Upload Response:", response); // Logging upload response
      if (response.data && response.data.IpfsHash) {
        await retrieveFromPinata(response.data.IpfsHash); // Retrieve the data using the obtained CID
      }
    } catch (error:any) {
      console.error("Error:", error); // Enhanced error logging
      if (error.response) {
        console.error("Error Response:", error.response.data); // Log response data from server
      }
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    uploadToPinata();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Enter your prompt"
          disabled={uploading}
        />
        <button type="submit" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      {retrievedData && (
        <div>
          <h3>Retrieved Data:</h3>
          <pre>{retrievedData}</pre>
        </div>
      )}
    </div>
  );
};

export default PromptUploader;
