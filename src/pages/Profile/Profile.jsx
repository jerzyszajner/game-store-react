import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { getAuthContext } from "../../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { auth, database } from "../../../firebaseConfig";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const { user } = getAuthContext();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!user || !user.uid) return;
        // Fetch user data from Firestore
        const userDocRef = doc(database, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUserData();
  }, [user]);

  return (
    <div className={styles.profileWrapper}>
      <div className={styles.profileContainer}>
        {/* ---------------------- */}
        <div className={styles.profileImageContainer}>
          <img
            src={userData?.profilePicture || "/icons/userAvatar.png"}
            alt="Profile image"
            className={styles.profileImage}
          />
        </div>
        {/* ---------------------- */}
        <div className={styles.profileDetailsContainer}>
          <h2>Profile Details</h2>
          <p>
            <strong>First name: </strong>
            {userData?.firstname}
          </p>
          <p>
            <strong>Last Name: </strong>
            {userData?.lastname}
          </p>
          <p>
            <strong>Date of Birth: </strong>
            {userData?.dateOfBirth}
          </p>
          <p>
            <strong>Email: </strong>
            {userData?.email}
          </p>
          <p>
            <strong>Account Created on: </strong>
            {userData?.createdAt
              ? new Date(userData?.createdAt.toDate()).toLocaleDateString()
              : "N/A"}
          </p>
          <p>
            <strong>Last Sign in: </strong>
            {auth?.currentUser?.metadata.lastLoginAt
              ? new Date(
                  Number(auth?.currentUser?.metadata.lastLoginAt)
                ).toLocaleDateString()
              : "N/A"}
          </p>
          <p>
            <strong>Last Purchase: </strong>
            {userData?.lastPurchase || "No purchases yet"}
          </p>
          <p>
            <strong>Email Verification Status: </strong>
            {auth?.currentUser?.emailVerified
              ? "Email verified"
              : "Email not verified"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
