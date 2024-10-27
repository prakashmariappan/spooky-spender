import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <article className='column'>
                <img src={user.picture} alt={user.name} />
                <div>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            </article>
        )
    )
}
export default Profile