import React from 'react';
import styles from './Approval.module.css';
const Approval = () => {
    return (
    		<div className={styles.frameParent}>
      			<div className={styles.frameGroup}>
        				<div className={styles.approvalWrapper}>
          					<b className={styles.approval}>Approval</b>
        				</div>
        				<div className={styles.culParent}>
          					<div className={styles.cul}>
            						<div className={styles.dateOfApplicationWrapper}>
              							<b className={styles.dateOfApplication}>Date of Application</b>
            						</div>
            						<div className={styles.wrapper}>
              							<div className={styles.div}>03/07/2021</div>
            						</div>
            						<div className={styles.container}>
              							<div className={styles.div}>01/07/2022</div>
            						</div>
            						<div className={styles.wrapper}>
              							<div className={styles.div}>27/06/2022</div>
            						</div>
            						<div className={styles.container}>
              							<div className={styles.div}>16/06/2022</div>
            						</div>
            						<div className={styles.wrapper}>
              							<div className={styles.div}>22/05/2022</div>
            						</div>
          					</div>
          					<div className={styles.cul}>
            						<div className={styles.applicationTypeWrapper}>
              							<b className={styles.dateOfApplication}>Application type</b>
            						</div>
            						<div className={styles.casualLeaveWrapper}>
              							<div className={styles.div}>Casual leave</div>
            						</div>
            						<div className={styles.lateEntryWrapper}>
              							<div className={styles.div}>Late entry</div>
            						</div>
            						<div className={styles.casualLeaveWrapper}>
              							<div className={styles.div}>maternity leave</div>
            						</div>
            						<div className={styles.lateEntryWrapper}>
              							<div className={styles.div}>Late entry</div>
            						</div>
            						<div className={styles.casualLeaveWrapper}>
              							<div className={styles.div}>Sick leave</div>
            						</div>
          					</div>
          					<div className={styles.cul}>
            						<div className={styles.applicationTypeWrapper}>
              							<b className={styles.dateOfApplication}>Duration</b>
            						</div>
            						<div className={styles.casualLeaveWrapper}>
              							<div className={styles.div}>02 (05-06 Jul)</div>
            						</div>
            						<div className={styles.lateEntryWrapper}>
              							<div className={styles.div}>01 (06 Jul)</div>
            						</div>
            						<div className={styles.casualLeaveWrapper}>
              							<div className={styles.div}>05 (05-06 Jul)</div>
            						</div>
            						<div className={styles.lateEntryWrapper}>
              							<div className={styles.div}>02 (06 Jul)</div>
            						</div>
            						<div className={styles.casualLeaveWrapper}>
              							<div className={styles.div}>02 (05-06 Jul)</div>
            						</div>
          					</div>
          					<div className={styles.cul3}>
            						<div className={styles.statusWrapper}>
              							<b className={styles.dateOfApplication}>Status</b>
            						</div>
            						<div className={styles.culInner}>
              							<div className={styles.orangeBadgeWrapper}>
                								<div className={styles.orangeBadge}>Pending</div>
              							</div>
            						</div>
            						<div className={styles.culChild}>
              							<div className={styles.redBadgeWrapper}>
                								<div className={styles.orangeBadge}>Rejected</div>
              							</div>
            						</div>
            						<div className={styles.culInner1}>
              							<div className={styles.blueBadgeWrapper}>
                								<div className={styles.orangeBadge}>Approved</div>
              							</div>
            						</div>
            						<div className={styles.culInner2}>
              							<div className={styles.blueBadgeWrapper}>
                								<div className={styles.orangeBadge}>Approved</div>
              							</div>
            						</div>
            						<div className={styles.culInner1}>
              							<div className={styles.blueBadgeWrapper}>
                								<div className={styles.orangeBadge}>Approved</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameContainer}>
        				<div className={styles.rectangleParent}>
          					<div className={styles.frameChild} />
          					<div className={styles.approved}>Approved</div>
        				</div>
        				<div className={styles.rectangleGroup}>
          					<div className={styles.frameItem} />
          					<div className={styles.approved}>Rejected</div>
        				</div>
        				<div className={styles.rectangleContainer}>
          					<div className={styles.frameInner} />
          					<div className={styles.approved}>Pending</div>
        				</div>
      			</div>
    		</div>

    );
}

export default Approval;
