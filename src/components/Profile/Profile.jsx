import React from 'react';
import styles from '../../style';
import ShowProfile from './ShowProfile';
import Alert from './Alert';
import SavedProfile from './SavedProfile';

const Profile = () => {
  return (
    <>
      <section
        id=""
        className={` flex-col ${styles.paddingY}`}
      >
        {/* Section 1 */}
        <section className="w-full flex md:flex-row md:p-1 p-5 flex-col items-center justify-center">
            <ShowProfile />
          </section>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10 md:bottom-[10rem]`}
        >
          
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
