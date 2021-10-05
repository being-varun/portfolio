const signup=() => {
        return (
            <table>
                <tr>
                    <td>
                        Name:
                    </td>
                    <td>
                        <input type="text" placeholder="First Name" />
                    </td>
                    <td>
                        <input type="text" placeholder="Last Name" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Email Address:
                    </td>
                    <td>
                        <input type="email" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Password:
                    </td>
                    <td>
                        <input type="password" />
                    </td>
                </tr>
                <tr>
                    <td>
                        Confirm Password:
                    </td>
                    <td>
                        <input type="password" />
                    </td>
                </tr>

            </table>
        )
    
}
export default signup;