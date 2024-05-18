import React, { useEffect, useState } from 'react';
import styles from '../../style';
import ShowProfile from './ShowProfile';
import Alert from './Alert';
import SavedProfile from './SavedProfile';

const Profile = ({ userId }) => {
  console.log(userId)
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://copartners.in:5131/api/User/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section className={`flex-col ${styles.paddingY}`}>
        {/* Section 1 */}
        <section className="w-full flex md:flex-row md:p-1 p-5 flex-col items-center justify-center">
          <ShowProfile userData={userData} />
        </section>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-3 z-10 md:bottom-[10rem]`}>
          {/* Section 2 */}
          <section className="w-full flex md:flex-row flex-col items-center justify-center">
            <Alert />
          </section>
          {/* Section 3 */}
          <section className="w-full flex md:flex-row flex-col items-center justify-center">
            <SavedProfile />
          </section>
        </div>
      </section>
    </>
  );
};

export default Profile;
