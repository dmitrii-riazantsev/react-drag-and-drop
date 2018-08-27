import React from 'react';


export default class Application extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            data: [
                [1, 'column11', 'column12', 'column13', 'column14', 'column15'],
                [2, 'column21', 'column22', 'column23', 'column24', 'column25'],
                [3, 'column31', 'column32', 'column33', 'column34', 'column35'],
                [4, 'column41', 'column42', 'column43', 'column44', 'column45'],
                [5, 'column51', 'column52', 'column53', 'column54', 'column55'],
                [6, 'column51', 'column52', 'column53', 'column54', 'column55'],
            ]
        }
    }
    render()
    {
        return (
            <div>
                <h1>Drag and Drop example</h1>
                <table style={{borderCollapse: 'collapse'}}>
                    <thead>
                        <tr>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            <th>Column 3</th>
                            <th>Column 4</th>
                            <th>Column 5</th>
                            <th>Column 6</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map(dataEntry =>
                        {
                            return (
                                <tr>
                                    {
                                        dataEntry.map(entryField =>
                                        {
                                            return <td key={entryField.id} style={{borderTop: '1px solid black', padding: '10px'}}>{entryField}</td>
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
      );
    }
};
