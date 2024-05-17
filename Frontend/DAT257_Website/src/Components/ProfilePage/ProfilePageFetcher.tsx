// ProfilePageFetcher.tsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfilePage from "./ProfilePage";

interface User {
  id: number;
  name: string;
  //lastName: string;
  email: string;
  donations: Array<string>;
}

function ProfilePageFetcher() {
  const { userId } = useParams<{ userId: string }>();
  const [userProfile, setUserProfile] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.post('/api/people/getUser', {adminKey: localStorage.getItem("adminKey")});
        setUserProfile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return <ProfilePage userProfile={userProfile} />;
}

export default ProfilePageFetcher;
