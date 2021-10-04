import React, { Component } from 'react';
class App extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>
                            Login nId:
                        </td>
                        <td>
                            <input type="text"></input>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            Password:
                        </td>
                        <td>
                            <input type="Password"></input>
                        </td>
                    </tr>
                </table>

                <br />
            </div>
        )
    }
}

export default App;