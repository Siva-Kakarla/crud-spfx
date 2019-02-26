import * as React from 'react';
import styles from '../Cmp_MainMenu/Cmp_MainMenu.module.scss';
import { ICmp_MainMenuProps } from '../Cmp_MainMenu/ICmp_MainMenu';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Cmp_MainMenu extends React.Component<ICmp_MainMenuProps, {}>
{
  public render(): React.ReactElement<ICmp_MainMenuProps>
  {
    return (
      <div className={ styles.crudWp }>
        <div className={ styles.container }>

        <div className={styles.Cust_Grid} dir="ltr">
          <div className={styles.Cust_Grid_Row}>
              <div className={styles.Cust_Grid_Col}>A</div>
              <div className={styles.Cust_Grid_Col}>B</div>
              <div className={styles.Cust_Grid_Col}>C</div>
          </div>
        </div>
          
          
          
          
          
          {/* <div  className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to CRUD Operations</span>

              <p className={ styles.subTitle }>Please select below options</p>
              <button className={ styles.button } value='Demo' onClick={this.props.Create_ClickHandler}>
                <span className={ styles.label }>Create Item</span>
              </button>
            </div>
          </div> */}
          
          {/* <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div> */}

        </div>
      </div>
    );


  }
}
