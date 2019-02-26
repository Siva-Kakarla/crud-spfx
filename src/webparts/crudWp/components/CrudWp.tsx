import * as React from 'react';
import styles from './CrudWp.module.scss';
import { ICrudWpProps } from './ICrudWpProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {ICrudWpState} from './CrudWpState';
import { ICmp_MainMenuProps } from '../Cmp_MainMenu/ICmp_MainMenu'
import Cmp_MainMenu from '../Cmp_MainMenu/Cmp_MainMenu';

export default class CrudWp extends React.Component<ICrudWpProps, ICrudWpState>
{

  constructor(props: ICrudWpProps, state: ICrudWpState) {
    super(props);

    this.state = {
      SateName: "My Name Siva"
    };
  }

  public render(): React.ReactElement<ICrudWpProps>
  {
    return (
      <div className={ styles.crudWp }>
        <div className={ styles.container }>
          <div  className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to CRUD Operations</span>

              <p className={ styles.subTitle }>There are 4 different CRUD operations is there,
                  by using this app you can find these below in functional.
              </p>
              <p className={ styles.description }>1. Create Item </p>
              <p className={ styles.description }>2. Read Item</p>
              <p className={ styles.description }>3. Update Item</p>
              <p className={ styles.description }>4. Delete Item</p>
              <p className={ styles.description }></p>
              <p className={ styles.description }>C|Create</p>
              <p className={ styles.description }>R|Read</p>
              <p className={ styles.description }>U|Update</p>
              <p className={ styles.description }>D|Delete</p>

              <button className={ styles.button } value='Demo' onClick={this.Button_Click}>Click here for Demo</button>
              <div>{this.state.SateName}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public Button_Click():void
  {
    alert('Main Component..')
    //this.setState{}

    this.setState({
      SateName: "My Self Siva"
    });
  }

  public Create_button_Click():void
  {
    //ICmp_MainMenuProps
  }

  public Read_button_Click():void
  {
    //ICmp_MainMenuProps
  }

  public Update_button_Click():void
  {
    //ICmp_MainMenuProps
  }

  public Delete_button_Click():void
  {
    //ICmp_MainMenuProps
  }
}
