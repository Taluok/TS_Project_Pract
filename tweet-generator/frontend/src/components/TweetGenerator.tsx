import { useState } from 'react';
import { CircularProgress } from '@mui/material'; // Nuevo import
import { generateTweet } from '../services/api';

interface Tweet {
  id: string;
  content: string;
}

const TweetGenerator = () => {
  const [tweet, setTweet] = useState<Tweet | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await generateTweet();
      setTweet(response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <button 
          type="submit"
          className="button"
          disabled={loading}
        >
          {loading ? (
            <span>
              Generando... 
              <CircularProgress size={20} /> {/* Nuevo componente */}
            </span>
          ) : (
            'Crear Tweet'
          )}
        </button>
      </form>

      {tweet && (
        <div className="tweet-card">
          <div className="tweet-content">
            <p>{tweet.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TweetGenerator;




