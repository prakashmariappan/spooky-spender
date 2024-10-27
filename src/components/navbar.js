import { useAuth0} from '@auth0/auth0-react';
import styles from './Navbar.module.css';
import Profile from './profile';
import { useNavigate } from "react-router-dom";


const NavBar = () => {
    const { logout,isAuthenticated } = useAuth0();
	const navigate = useNavigate();
  	return (
    		<div className={styles.navBar}>
      			<div>
        				<div className={styles.finebankio}>
          					<h3 className={styles.logonav} onClick={() => navigate(-3)}>Spooky Spender</h3>
        				</div>
        				<div className={styles.menu}>
          					<div className={styles.menu2}>
            						<div className={styles.overview}/>
            						<div className={styles.navtext}>Overview</div>
          					</div>
          					<div className={styles.menu2}>
            						<div className={styles.approvals} />
            						<div className={styles.navtext} onClick={() => {
          navigate("/Dashboard/Approval");
        }}>Approvals</div>
          					</div>
                              <div className={styles.logoutcon} onClick={logout}>
            						<div className={styles.logout}/>
            						<div className={styles.navtext}>Logout</div>
          					</div>
        				</div>
      			</div>
				  <Profile/>
    		</div>);
};

export default NavBar;

