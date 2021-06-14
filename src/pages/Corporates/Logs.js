import React, { Component } from "react";

import { Card, CardBody, CardTitle, Badge, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Logs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [
                { id: "customCheck2", orderId: "#SK2540", billingName: "Neal Matthews", Date: "07 Oct, 2019", total: "$400", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#" },
                { id: "customCheck3", orderId: "#SK2541", billingName: "Jamal Burnett", Date: "07 Oct, 2019", total: "$380", badgeClass: "danger", paymentStatus: "Chargeback", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#" },
                { id: "customCheck4", orderId: "#SK2542", billingName: "Juan Mitchell", Date: "06 Oct, 2019", total: "$384", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#" },
                { id: "customCheck5", orderId: "#SK2543", billingName: "Barry Dick", Date: "05 Oct, 2019", total: "$412", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-mastercard", paymentMethod: "Mastercard", link: "#" },
                { id: "customCheck6", orderId: "#SK2544", billingName: "Ronald Taylor", Date: "04 Oct, 2019", total: "$404", badgeClass: "warning", paymentStatus: "Refund", methodIcon: "fa-cc-visa", paymentMethod: "Visa", link: "#" },
                { id: "customCheck7", orderId: "#SK2545", billingName: "Jacob Hunter", Date: "04 Oct, 2019", total: "$392", badgeClass: "success", paymentStatus: "Paid", methodIcon: "fa-cc-paypal", paymentMethod: "Paypal", link: "#" }
            ]
        };
    }

    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4">
                            Logs
                        </CardTitle>
                        <div className="table-responsive">
                            <table className="table table-centered table-nowrap mb-0">
                                <thead className="thead-light">
                                    <tr>
                                        
                                        <th>Time</th>
                                        <th>User</th>
                                        <th>Activity</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.transactions.map((transaction, key) =>
                                            <tr key={"_tr_" + key}>
                                                {/* <td>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id={transaction.id} />
                                                        <label className="custom-control-label" htmlFor={transaction.id}>&nbsp;</label>
                                                    </div>
                                                </td> */}
                                                <td>
                                                    {transaction.Date}
                                                </td>
                                                <td><Link to="#" className="text-body font-weight-bold"> {transaction.orderId} </Link> </td>
                                                <td>{transaction.billingName}</td>
                                                
                                                
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}

export default Logs;
