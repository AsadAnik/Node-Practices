import React from 'react';


class User extends React.Component {
    // the constructor method..
    constructor(props) {
        super(props);
        
        this.state = {
            data: props.data,
        }
    }

    // Render method..
    render() {
        const { data } = this.state;

        return (
            <>
                <h1>All Users</h1>
                {
                    data.map(user => {
                        return (
                            <div key={user.id}>
                                <h3 style={{ color: 'gray' }}>{user.username}</h3>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default User;