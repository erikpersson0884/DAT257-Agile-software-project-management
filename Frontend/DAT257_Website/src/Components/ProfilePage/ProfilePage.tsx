// ProfilePage.tsx
import ".//ProfilePage.css"
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  donations: Array<string>;
}

interface ProfilePageProps {
  userProfile: User | null;
}

function ProfilePage({ userProfile }: ProfilePageProps) {
  return (
    <>
      <div className="profileInfoBox">
        <h3 className="profileInfo-h3">First name: {userProfile?.firstName}</h3>
        <h3 className="profileInfo-h3">Last Name: {userProfile?.lastName}</h3>
        <h3 className="profileInfo-h3">Email: {userProfile?.email}</h3>
      </div>
    </>
  );
}

export default ProfilePage;
