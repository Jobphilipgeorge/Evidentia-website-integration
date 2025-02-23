export const generateImageFromText = async (text) => {
    // Replace with your actual API endpoint
    const response = await fetch('your-api-endpoint/text-to-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    return response.json();
  };
  
  export const generateTextFromImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);
    
    const response = await fetch('your-api-endpoint/image-to-text', {
      method: 'POST',
      body: formData,
    });
    return response.json();
  };