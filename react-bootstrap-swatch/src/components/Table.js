import React, { Component } from 'react';
import TableRowButton from './TableRowButton';

class Table extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Column heading</th>
                            <th scope="col">Column heading</th>
                            <th scope="col">Column heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-primary">
                            <th scope="row">Primary</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>
                                <TableRowButton/>
                                <span class="badge badge-pill badge-primary">Primary</span>
                            </td>
                        </tr>
                        <tr className="table-secondary">    
                            <th scope="row">Secondary</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>
                                <TableRowButton/>
                                <span class="badge badge-pill badge-primary">Primary</span>
                            </td>
                        </tr>
                        <tr className="table-success">
                            <th scope="row">Success</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>
                                <TableRowButton/>
                                <span class="badge badge-pill badge-primary">Primary</span>
                            </td>
                        </tr>
                        <tr className="table-danger">
                            <th scope="row">Danger</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>
                                <TableRowButton/>
                                <span class="badge badge-info">Info</span>
                            </td>
                        </tr>
                        <tr className="table-warning">
                            <th scope="row">Warning</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>
                                <TableRowButton/>
                                <span class="badge badge-info">Info</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        )
    }

}

export default Table;