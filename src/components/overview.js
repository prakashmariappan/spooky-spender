import { useState, useEffect } from 'react';
import styles from './Overview.module.css';
import Content from './content';
import jsonData from './data.json'; // Import the JSON directly
const MAX_LENGTH = 100; // Max characters before truncating

const Overview = () => {
  const [newsData, setNewsData] = useState([]);
  const [showNews, setShowNews] = useState(false);
  const [expandedStates, setExpandedStates] = useState([]); // Track expanded states

  useEffect(() => {
    setNewsData(jsonData); // Set the imported JSON
    setExpandedStates(new Array(jsonData.length).fill(false)); // Initialize states
  }, []);

  const handleNewsClick = () => setShowNews(!showNews);

  const toggleExpand = (index) => {
    setExpandedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  const truncateText = (text, isExpanded) =>
    isExpanded || text.length <= MAX_LENGTH ? text : `${text.slice(0, MAX_LENGTH)}...`;

  return (
    <div className={styles.overview}>
      {/* Header section */}
      <div className={styles.header3} style={{ display: showNews ? 'none' : 'flex' }}>
        <b className={styles.usernamestyle}>Hello,</b>
        <div className={styles.buttonicon}>
          <button onClick={handleNewsClick}>News</button>
          <div className={styles.notificationIconChild} />
        </div>
      </div>

      {/* News Section */}
      {showNews && (
        <div className={styles.newsSection}>
          {newsData.map((item, index) => (
            <div key={index} className={styles.newsItem}>
              <img src={item.image} alt={item.title} className={styles.newsImage} />

              <div className={styles.newsContent}>
                <h3>{item.title}</h3>
                <p className={styles.date}>Published: {new Date(item.date).toLocaleString()}</p>

                <p
                  dangerouslySetInnerHTML={{
                    __html: truncateText(item.content.replace(/<[^>]*>?/gm, ''), expandedStates[index]),
                  }}
                />

                <div className={styles.newsMeta}>
                  <p><strong>Author:</strong> {item.author}</p>
                  <p><strong>Source:</strong> {item.site}</p>
                  <p><strong>Ticker:</strong> {item.tickers}</p>
                </div>

               <div className={styles.buttoncon}><a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.readMoreLink}
                >
                  Visit Source
                </a>
                {item.content.length > MAX_LENGTH && (
                  <button
                    className={styles.toggleButton}
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedStates[index] ? 'Read less' : 'Read more'}
                  </button>
                )}
</div> 

              </div>
            </div>
          ))}
        </div>
      )}

      {/* Spent vs Limit Section */}
      {!showNews && <Content />}
    </div>
  );
};

export default Overview;
