// ProfilePageFetcher.tsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfilePage from "./ProfilePage";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  donations: Array<string>;
}

function ProfilePageFetcher() {
  const { userId } = useParams<{ userId: string }>();
  const [userProfile, setUserProfile] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`link-to-backend/${userId}`);
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <ProfilePage userProfile={userProfile} /> // Removed unnecessary fragments
  );
}

export default ProfilePageFetcher;
