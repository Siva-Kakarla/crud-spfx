import * as React from 'react';
import styles from './CrudWp.module.scss';
import { ICrudWpProps } from './ICrudWpProps';
import { escape, constant } from '@microsoft/sp-lodash-subset';
import {ICrudWpState} from './CrudWpState';
import { LetterSpacingProperty } from 'csstype';

import Cmp_MainMenu from '../Cmp_MainMenu/Cmp_MainMenu';
import Cmp_Create from '../Cmp_Create/Cmp_Create'
import {PanelScrollExample} from '../Cmp_Create/Create_Panel/Create_Panel'
import {IPanelScrollExampleState} from '../Cmp_Create/Create_Panel/Create_Panel'


export default class CrudWp extends React.Component<ICrudWpProps, ICrudWpState>
{
  superheroElement : any;

  constructor(props: ICrudWpProps, state: ICrudWpState) {
    super(props);
    this.superheroElement = React.createRef();
    this.state = {
      State_Name: "Init"
    };
  }

  public render(): React.ReactElement<ICrudWpProps>
  {
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
            <div>Test {this.state.State_Name}</div>
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
                    
                  </div>
                </div>
              </div>
            </div>
          </div>);
      break;

      case "MainMenu":
        Final_Html = (
          <div className={ styles.crudWp }>
            <div>Test {this.state.State_Name}</div>
            <div className={ styles.container }>
              <div  className={ styles.row }>
                <div className={ styles.column }>
                  <Cmp_MainMenu
                     description= {""}
                     Create_ClickHandler= {this.Create_button_Click.bind(this)}
                     Read_ClickHandler= {this.Read_button_Click.bind(this)}
                     Update_ClickHandler= {this.Update_button_Click.bind(this)}
                     Delete_ClickHandler= {this.Delete_button_Click.bind(this)}
                  />
                </div>
              </div>
            </div>

            <div>Test {this.state.State_Name}</div>
          </div>
        );
      break;

      case "Creat":
        Final_Html = (
          <div className={ styles.crudWp }>
            <div>Test {this.state.State_Name}</div>
            <div className={ styles.container }>
              <Cmp_Create
                    description={""}
                    Create_ClickHandler= {this.Create_Click_Event.bind(this)}
                    Cancel_ClickHandler={this.Cancel_Click_Event.bind(this)}
              />
            </div>
          </div>
        );
      break;

      case "CreatPanel":
        Final_Html = (
          <div className={ styles.crudWp }>
            <div>Test {this.state.State_Name}</div>
            <div className={ styles.container }>
              <Cmp_Create
                    description={""}
                    Create_ClickHandler= {this.Create_Click_Event.bind(this)}
                    Cancel_ClickHandler={this.Cancel_Click_Event.bind(this)}
              />
            </div>

            <PanelScrollExample 
              ref={this.superheroElement}
              Save_Panel_Data={this.CreatePanel_Save_Click_Event.bind(this)}
            />
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
    this.setState({
      State_Name: "MainMenu"
    });
  }

  public Create_button_Click():void
  {
    this.setState({
      State_Name: "Creat"
    });
  }

  public Create_Click_Event():void
  {
    if(this.state.State_Name == "CreatPanel")
    {
      this.superheroElement.current.ChangeState_OfPanel();
    }
    else
    {
      this.setState({
        State_Name: "CreatPanel"
      });
    }
  }

  public Cancel_Click_Event():void
  {
    this.setState({
      State_Name: "MainMenu"
    });
  }


  public CreatePanel_Save_Click_Event():void
  {
    this.superheroElement.current.ChangeState_OfPanel();
  }

  public Read_button_Click():void
  {
    this.setState({
      State_Name: "Read"
    });
  }

  public Update_button_Click():void
  {
    this.setState({
      State_Name: "Update"
    });
  }

  public Delete_button_Click():void
  {
    this.setState({
      State_Name: "Delete"
    });
  }
}
