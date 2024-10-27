import { useCallback } from 'react';
import styles from './Overview.module.css';


const Overview = () => {
  	
  	const onFrameContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.overview}>
                <div className={styles.header3}>
          					<b className={styles.helloTanzir}>Hello Tanzir</b>
            						<div className={styles.notificationIconChild}/>
      			</div>
                  <div className={styles.topContent}>
        				<div className={styles.goals}>
          					<div className={styles.recentTransaction1}>Spent Limit</div>
          					<div className={styles.content8}>
            						<div className={styles.itemDetails}>
              							<div className={styles.header2}>
                								<div className={styles.parent}>
                  									<div className={styles.div12}>$20,000</div>
                  									
                								</div>
                								<div className={styles.may20235}>May, 2023</div>
              							</div>
            						</div>
            						<div className={styles.details6}>
              							<div className={styles.leftContent}>
                								<div className={styles.targetAchieved}>
                  									<div className={styles.text}>
                    										<div className={styles.thisMonthLimit}>Amount Spent</div>
                    										<b className={styles.b6}>$12,500</b>
                  									</div>
                								</div>
                								<div className={styles.targetAchieved}>
                  									
                  									<div className={styles.text}>
                    										<div className={styles.thisMonthLimit}>This month Limit</div>
                    										<b className={styles.b6}>$20,000</b>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.targetVsAchievementMeter}>
                								<div className={styles.graph1}>
                  									<div className={styles.graph2}>
                    										<div className={styles.itemDetails}>
                      											
                    										</div>
                    										<img className={styles.meterIcon} alt="" src="Meter.svg" />
                  									</div>
                  									<div className={styles.targetRange}>
                    										<div className={styles.div13}>$0</div>
                    										<div className={styles.k4}>12K</div>
                    										<div className={styles.k5}>$20k</div>
                  									</div>
                								</div>
                								<div className={styles.spentVsLimit}>Spent vs Limit</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.statistics}>
        				<div className={styles.recentTransaction1}>Statistics</div>
        				<div className={styles.statisticsDetails}>
          					<div className={styles.header}>
            						<div className={styles.weeklyComparisonParent}>
              							<div className={styles.div}>Weekly Comparison</div>
            						</div>
            						<div className={styles.indicator}>
              							<div className={styles.thisWeek}>
                								<div className={styles.thisWeekChild} />
                								<div className={styles.viewAll}>This week</div>
              							</div>
              							<div className={styles.thisWeek}>
                								<div className={styles.lastWeekChild} />
                								<div className={styles.viewAll}>Last week</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.graph}>
            						<div className={styles.line}>
              							<div className={styles.k}>$250k</div>
              							<div className={styles.lineChild} />
            						</div>
            						<div className={styles.line1}>
              							<div className={styles.k}>$50k</div>
              							<div className={styles.lineChild} />
            						</div>
            						<div className={styles.line2}>
              							<div className={styles.k}>$10k</div>
              							<div className={styles.lineChild} />
            						</div>
            						<div className={styles.line3}>
              							<div className={styles.k}>$2k</div>
              							<div className={styles.lineChild} />
            						</div>
            						<div className={styles.line4}>
              							<div className={styles.k}>$0</div>
              							<div className={styles.lineChild} />
            						</div>
            						<div className={styles.bar}>
              							<div className={styles.graphBar01}>
                								<div className={styles.bar1}>
                  									<div className={styles.barChild} />
                  									<div className={styles.barItem} />
                								</div>
                								<div className={styles.sun}>17 Sun</div>
              							</div>
              							<div className={styles.bar2}>
                								<div className={styles.bar1}>
                  									<div className={styles.barInner} />
                  									<div className={styles.rectangleDiv} />
                								</div>
                								<div className={styles.sun}>18 Mon</div>
              							</div>
              							<div className={styles.bar2}>
                								<div className={styles.bar1}>
                  									<div className={styles.barChild} />
                  									<div className={styles.barChild2} />
                								</div>
                								<div className={styles.sun}>19 Tue</div>
              							</div>
              							<div className={styles.bar2}>
                								<div className={styles.bar1}>
                  									<div className={styles.barChild} />
                  									<div className={styles.barChild2} />
                								</div>
                								<div className={styles.sun}>20 wed</div>
              							</div>
              							<div className={styles.bar2}>
                								<div className={styles.bar1}>
                  									<div className={styles.barChild5} />
                  									<div className={styles.barChild6} />
                								</div>
                								<div className={styles.sun}>21 Thu</div>
              							</div>
              							<div className={styles.bar2}>
                								<div className={styles.bar1}>
                  									<div className={styles.barChild7} />
                  									<div className={styles.barChild8} />
                								</div>
                								<div className={styles.sun}>22 Fri</div>
              							</div>
              							<div className={styles.bar2}>
                								<div className={styles.bar1}>
                  									<div className={styles.barChild9} />
                  									<div className={styles.barChild10} />
                								</div>
                								<div className={styles.sun}>23 Sat</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.expensesBreakdown}>
        				<div className={styles.header1}>
          					<div className={styles.recentTransaction1}>Expenses Breakdown</div>
          					<div className={styles.compareToLast}>*Compare to last month</div>
        				</div>
        				<div className={styles.content1}>
                        <div className={styles.item5}>
                								<div className={styles.icon5}>
                  									<img className={styles.gamepad2Icon} alt="" src="Housing.svg" />
                								</div>
                								<div className={styles.details}>
                  									<div className={styles.itemDetails}>
                      											<div className={styles.housing}>Housing</div>
                      											<b className={styles.b}>$250.00</b>
                  									</div>
                								</div>
              							</div>
                                          <div className={styles.item5}>
                								<div className={styles.icon5}>
                  									<img className={styles.gamepad2Icon} alt="" src="Housing.svg" />
                								</div>
                								<div className={styles.details}>
                  									<div className={styles.itemDetails}>
                      											<div className={styles.housing}>Housing</div>
                      											<b className={styles.b}>$250.00</b>
                  									</div>
                								</div>
              							</div>
                                          <div className={styles.item5}>
                								<div className={styles.icon5}>
                  									<img className={styles.gamepad2Icon} alt="" src="Housing.svg" />
                								</div>
                								<div className={styles.details}>
                  									<div className={styles.itemDetails}>
                      											<div className={styles.housing}>Housing</div>
                      											<b className={styles.b}>$250.00</b>
                  									</div>
                								</div>
              							</div>
                                          <div className={styles.item5}>
                								<div className={styles.icon5}>
                  									<img className={styles.gamepad2Icon} alt="" src="Housing.svg" />
                								</div>
                								<div className={styles.details}>
                  									<div className={styles.itemDetails}>
                      											<div className={styles.housing}>Housing</div>
                      											<b className={styles.b}>$250.00</b>
                  									</div>
                								</div>
              							</div>
                                          <div className={styles.item5}>
                								<div className={styles.icon5}>
                  									<img className={styles.gamepad2Icon} alt="" src="Housing.svg" />
                								</div>
                								<div className={styles.details}>
                  									<div className={styles.itemDetails}>
                      											<div className={styles.housing}>Housing</div>
                      											<b className={styles.b}>$250.00</b>
                  									</div>
                								</div>
              							</div>
                                          <div className={styles.item5}>
                								<div className={styles.icon5}>
                  									<img className={styles.gamepad2Icon} alt="" src="Housing.svg" />
                								</div>
                								<div className={styles.details}>
                  									<div className={styles.itemDetails}>
                      											<div className={styles.housing}>Housing</div>
                      											<b className={styles.b}>$250.00</b>
                  									</div>
                								</div>
              							</div>
                                          <div className={styles.item5}>
                								<div className={styles.icon5}>
                  									<img className={styles.gamepad2Icon} alt="" src="Housing.svg" />
                								</div>
                								<div className={styles.details}>
                  									<div className={styles.itemDetails}>
                      											<div className={styles.housing}>Housing</div>
                      											<b className={styles.b}>$250.00</b>
                  									</div>
                								</div>
              							</div>
                                          <div className={styles.item5}>
                								<div className={styles.icon5}>
                  									<img className={styles.gamepad2Icon} alt="" src="Housing.svg" />
                								</div>
                								<div className={styles.details}>
                  									<div className={styles.itemDetails}>
                      											<div className={styles.housing}>Housing</div>
                      											<b className={styles.b}>$250.00</b>
                  									</div>
                								</div>
              							</div>
            						
            						<img className={styles.splitLineIcon} alt="" src="Split Line.svg" />
        				</div>
      			</div>
      			
    		</div>);
};

export default Overview;

