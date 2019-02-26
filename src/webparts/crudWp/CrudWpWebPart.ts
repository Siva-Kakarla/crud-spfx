import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'CrudWpWebPartStrings';
import CrudWp from './components/CrudWp';
import { ICrudWpProps } from './components/ICrudWpProps';
import Cmp_MainMenu from './Cmp_MainMenu/Cmp_MainMenu'
import {ICrudWpState} from './components/CrudWpState';

export interface ICrudWpWebPartProps {
  description: string;
}

export default class CrudWpWebPart extends BaseClientSideWebPart<ICrudWpWebPartProps>
{
  public render(): void
  {
    const element: React.ReactElement<ICrudWpProps > = React.createElement(CrudWp,
      {
        description: this.properties.description,
        ClickHandler: this.MainMenu_Click 
      }
    );
    ReactDom.render(element, this.domElement);    
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  public MainMenu_Click():void
  {
      
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
