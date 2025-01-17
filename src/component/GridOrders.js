import avatar2 from '../component/assets/images/users/avatar2.jpg';
import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';

export class GridOrders extends Component {
    

    render() {
        return (
            <div>
                <div className="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-11 col-sm-11">
                            <div class="card">
                                <div class="card-body table-responsive">
                                    <div className="list-head-btn">
                                        <div className="head">
                                            <h4>List Orders</h4>
                                        </div>
                                    </div>
                                    <div class="table-3">
                                        <table id="datatable2" class="table">
                                            <thead>
                                                <tr>
                                                    <th>Order</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Total</th>
                                                    <th>Actions</th>

                                                </tr>
                                            </thead>


                                            <tbody>

                                                <tr >
                                                    <td>#1512 Ghous Muhammad</td>
                                                    <td>20/8/2020</td>
                                                    <td>in process</td>
                                                    <td>₨490.00</td>
                                                 

                                                    <td>
                                                        <div class="icon-pad">

                                                            <a href="/component/ViewOrder"><i className="fas fa-eye"></i></a>
                                                            <i className="fas fa-trash-alt"></i>
                                                        </div>
                                                    </td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GridOrders

