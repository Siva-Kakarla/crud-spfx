import * as React from 'react';
import styles from '../Cmp_MainMenu/Cmp_MainMenu.module.scss';
import { ICmp_MainMenuProps } from '../Cmp_MainMenu/ICmp_MainMenu';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Cmp_MainMenu extends React.Component<ICmp_MainMenuProps, {}>
{
  public render(): React.ReactElement<ICmp_MainMenuProps>
  {
    return (
      <div className={styles.cmp_Menu}>

        <span className={ styles.title }>Welcome to CRUD Operations</span>
        <p className={ styles.subTitle }>Please select below options</p>
          
        <div className={styles.Cust_Grid} dir="ltr">
          <div className={styles.Cust_Grid_Row}>
              <div className={styles.Cust_Grid_Col}>
                <button className={ styles.button } value='Create Item' onClick={this.props.Create_ClickHandler}>
                  <span className={ styles.label }>Create Item</span>
                </button>
              </div>

              <div className={styles.Cust_Grid_Col_B}>
                <button className={ styles.button } value='Read Item' onClick={this.props.Read_ClickHandler}>
                  <span className={ styles.label }>Read  Item</span>
                </button>
              </div>
            </div>
          </div>

          <br></br>

          <div className={styles.Cust_Grid} dir="ltr">
          <div className={styles.Cust_Grid_Row}>
              <div className={styles.Cust_Grid_Col}>
                <button className={ styles.button } value='Update Item' onClick={this.props.Update_ClickHandler}>
                  <span className={ styles.label }>Update Item</span>
                </button>
              </div>

              <div className={styles.Cust_Grid_Col_B}>
                <button className={ styles.button } value='Delete Item' onClick={this.props.Delete_ClickHandler}>
                  <span className={ styles.label }>Delete Item</span>
                </button>
              </div>

            </div>
          </div>
        </div>
    );


  }
}
