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

        <div className="labelSection">
          <h3 className="labelText"> First Name: </h3>
          <h3 className="labelText"> Last Name: </h3>
          <h3 className="labelText"> Email: </h3>
        </div>


        <div className="textBoxSection">
        <input
                type="text"
                className="form-control"
                placeholder="First Name"
                value={userProfile?.firstName}
              ></input>

        <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                value={userProfile?.lastName}
              ></input>

        <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={userProfile?.email}
              ></input>


        </div>



      </div>
    </>
  );
}

export default ProfilePage;

