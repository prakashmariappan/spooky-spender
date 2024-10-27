import { useAuth0 } from '@auth0/auth0-react';
import styles from './Navbar.module.css';
const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className={styles.footer}>
                <div className={styles.profile}>
                      <div className={styles.namePicture}>
                            <img className={styles.imageIcon} src={user.picture} alt={user.name} />
                            <div className={styles.name}>
                                  <div className={styles.tanzirRahman}>{user.name}</div>
                                  
                                  <div className={styles.viewProfile}>View profile</div>
                            </div>
                      </div>
                      <div className={styles.icon1}>
                            <div className={styles.iconChild} />
                            <div className={styles.iconChild} />
                            <div className={styles.iconChild} />
                      </div>
                </div>
          </div>
)
    )
}
export default Profile