import React, { useState, useEffect } from 'react';
import '../Style/follower.css'

function Follower() {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        console.log(data);
        setFollowers(data.users);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFollowers();
  }, []);

  return (
    <section className="followers-container">
      <h1 className="followers-heading">Followers</h1>
      <ul className="followers-list">
        {followers.map((follower) => (
          <li key={follower.id} className="follower-item">
            <img src={follower.image} alt={`${follower.firstName} ${follower.lastName}`}></img>
            <div>
              <h2>{follower.firstName} {follower.lastName}</h2>
              <p>{follower.gender}, {follower.age}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Follower;
