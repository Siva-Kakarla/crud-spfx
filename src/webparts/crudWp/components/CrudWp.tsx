import * as React from 'react';
import styles from './CrudWp.module.scss';
import { ICrudWpProps } from './ICrudWpProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {ICrudWpState} from './CrudWpState';

export default class CrudWp extends React.Component<ICrudWpProps, ICrudWpState>
{
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
  }
}
