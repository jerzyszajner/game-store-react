import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { getAuthContext } from "../../context/AuthContext";
import {
  doc,
  getDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { auth, database } from "../../../firebaseConfig";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const { user } = getAuthContext();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!user?.uid) return;
        const userDocRef = doc(database, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchLastOrder = async () => {
      try {
        if (!user?.uid) return;
        const ordersQuery = query(
          collection(database, "users", user.uid, "orders"),
          orderBy("createdAt", "desc"),
          limit(1)
        );

        const querySnapshot = await getDocs(ordersQuery);

        if (!querySnapshot.empty) {
          const latestOrder = querySnapshot.docs[0].data();
          setUserData((prev) => ({
            ...prev,
            lastPurchase: latestOrder.createdAt.toDate(),
          }));
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchUserData();
    fetchLastOrder();
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
            {userData?.lastPurchase
              ? userData?.lastPurchase?.toLocaleString()
              : "No purchases yet"}
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
