import React from 'react';

class Car extends React.Component {
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

    console.log(data);

    return (
        <>
            <h1>All Cars</h1>
            {
                data.map(car => {
                    return (
                        <div key={car.id}>
                            <h3 style={{ color: 'gray' }}>
                                {car.brand} : {car.model}
                            </h3>
                        </div>
                    )
                })
            }
        </>
    );
}
}

export default Car;