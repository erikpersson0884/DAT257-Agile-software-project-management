interface Props {
    showLoginForm: boolean;
    displayLoginForm: () => void;
}

function UserLogo({showLoginForm, displayLoginForm }: Props) {



    return (
        <>

        <div className="loginContainer">
        <img onClick={displayLoginForm} className="userLogo" src="src/assets/user-logo.svg" alt="" style={{ cursor: 'pointer'}}></img>
        </div>
        </>
    )
}

export default UserLogo;