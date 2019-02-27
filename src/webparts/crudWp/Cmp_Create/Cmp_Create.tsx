import * as React from 'react';
import styles from './Cmp_Create.module.scss';
import { ICmp_CreateProps } from "./ICmp_CreateProps";
import { escape } from '@microsoft/sp-lodash-subset';

export default class Cmp_Create extends React.Component<ICmp_CreateProps, {}>
{
  public render(): React.ReactElement<ICmp_CreateProps>
  {
    return (
      <div className={styles.cmpCreate}>

        <div className={styles.Cust_Grid} dir="ltr">
          <div className={styles.Cust_Grid_Row}>
              <div className={styles.Cust_Grid_Col}>A</div>
              <div className={styles.Cust_Grid_Col}>B</div>
              <div className={styles.Cust_Grid_Col}>C</div>
          </div>
        </div>

        <button className={ styles.button } value='Create' onClick={this.props.Create_ClickHandler}>
          <span className={ styles.label }>Create Item</span>
        </button>
        
        <br></br>

        <button className={ styles.button } value='Cancel' onClick={this.props.Cancel_ClickHandler}>
          <span className={ styles.label }>Create Item</span>
        </button>
      </div>
    );
  }
}
