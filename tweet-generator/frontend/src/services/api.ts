const API_URL = 'http://localhost:3001/api/tweets';

export const generateTweet = async () => {
  const response = await fetch(`${API_URL}/generate`);
  if (!response.ok) throw new Error('Error en la API');
  return response.json();
};

