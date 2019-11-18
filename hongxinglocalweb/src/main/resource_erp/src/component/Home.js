import React, { Component } from 'react';
import { DatePicker } from 'antd';
const {RangePicker,} = DatePicker;

class Home extends Component{


    render() {
        return (
            <div>
                <RangePicker />
            </div>
        )
    };
}

export default Home;
