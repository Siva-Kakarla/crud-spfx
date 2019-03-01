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
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in leo.
            Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor sagittis nunc, ut interdum ipsum vestibulum
            non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac habitasse platea dictumst. In a odio eget enim
            porttitor maximus. Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus, maximus in mollis
            ac, luctus vel eros. Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat eros dui et ante.
            Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend efficitur.{' '}
          </p>

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

          <button className={ styles.button } value='Cancel' onClick={this.props.Cancel_ClickHandler}>
            <span className={ styles.label }>Home</span>
          </button>

        </div>
      </div>
    );
  }
}
