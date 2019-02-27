import * as React from 'react';
import styles from './CrudWp.module.scss';
import { ICrudWpProps } from './ICrudWpProps';
import { escape, constant } from '@microsoft/sp-lodash-subset';
import {ICrudWpState} from './CrudWpState';
import { ICmp_MainMenuProps } from '../Cmp_MainMenu/ICmp_MainMenu'
import Cmp_MainMenu from '../Cmp_MainMenu/Cmp_MainMenu';
import { LetterSpacingProperty } from 'csstype';

export default class CrudWp extends React.Component<ICrudWpProps, ICrudWpState>
{

  constructor(props: ICrudWpProps, state: ICrudWpState) {
    super(props);

    this.state = {
      State_Name: "Init"
    };
  }

  public render(): React.ReactElement<ICrudWpProps>
  {
    let Intit_Menu;

    if(this.state.State_Name == "Init")
    {
        Intit_Menu = <div>Init Scrren ...</div>
    }

    if(this.state.State_Name == "MainMenu")
    {
        Intit_Menu = <div>Main Menu ...</div>
    }

    return (
      this.Render_FinalHtml()
    );
  }

  private Render_FinalHtml(): JSX.Element 
  {
    let Final_Html;
    switch(this.state.State_Name)
    {
      case "Init":
      Final_Html = (<div className={ styles.crudWp }>
          <div className={ styles.container }>
            <div  className={ styles.row }>
              <div className={ styles.column }>
                <div>
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

                  <button className={ styles.button } value='Demo' onClick={this.Button_Click.bind(this)}>Click here for Demo</button>
                  <div>Test {this.state.State_Name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>);
      break;

      case "MainMenu":
        Final_Html = (
          <div className={ styles.crudWp }>
            <div className={ styles.container }>
              <div  className={ styles.row }>
                <div className={ styles.column }>
                  <Cmp_MainMenu
                     description= {""}
                     Create_ClickHandler= {this.Create_button_Click}
                     Read_ClickHandler= {this.Read_button_Click}
                     Update_ClickHandler= {this.Update_button_Click}
                     Delete_ClickHandler= {this.Delete_button_Click}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      break;

      default:
       Final_Html = (<div>
          Something went wrong please contact admin.
        </div>);
      break;
    }

    return Final_Html;
  }

  public Button_Click():void
  {
    //alert('Main Component..');
    //this.setState{}

    this.setState({
      State_Name: "MainMenu"
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
