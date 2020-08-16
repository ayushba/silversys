import React from 'react';
import { useHistory } from 'react-router-dom';

import './css/maincontent.css';

import noImage from '../images/no_image.jpg';
import AdvertisementPanelAndStats from './advertisementPanel';

import { Table, Menu, Dropdown } from 'antd';
import { GoKebabVertical } from 'react-icons/go';

// npm install --save-dev @iconify/react @iconify/icons-ant-design
import { Icon } from '@iconify/react';
import fullscreenOutlined from '@iconify/icons-ant-design/fullscreen-outlined';


const columns = [
    {
        title: 'Image',
        dataIndex: 'image',  // key name from the data
        render: (theImageURL) => <img className="table-cell-image" src={theImageURL} />
    },
    {
        title: 'For',
        dataIndex: 'for',
        key: 'for',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Location',
        dataIndex: 'location',
        key: 'location',
    },
    {
        title: 'Rent',
        dataIndex: 'rent',
        key: 'rent',
    },
    {
        title: 'Occupancy',
        dataIndex: 'occupancy',
        key: 'occupancy',
    },
    {
        title: 'AC/Non AC',
        dataIndex: 'ac',
        key: 'ac',
    },
    {
        title: 'Meal',
        dataIndex: 'meal',
        key: 'meal',
    },
    {
        title: 'Provider',
        dataIndex: 'provider',
        key: 'provider',
    },
    {
        title: 'Laundry',
        key: 'laundry',
        dataIndex: 'laundry',
    },
    {
        title: 'Action',
        key: 'action',
        fixed: "right",
        width: "80px",
        render: (text, record) => {
            const menu = (
                <Menu>
                    <Menu.Item>
                        <a href="/editProperty">Edit Details</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="/">Delete Property</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="/">Upload Images</a>
                    </Menu.Item>
                </Menu>
            );
            return (
                <>
                    <Dropdown overlay={menu} trigger={['click']} arrow>
                        <GoKebabVertical className="table-cell-context-action" />
                    </Dropdown>
                    <a href='./detailedPage'><Icon icon={fullscreenOutlined} /></a>
                    {/* <FullscreenOutlined /> */}
                    {/* <a href='/detailedPage' className='viewDetailText'>View Details</a> */}
                </>
            )
        },
    },
];

const data = [
    {
        image: noImage,
        key: '1',
        for: "Girls",
        location: "Rohini/Delhi/Delhi/East",
        occupancy: "Double",
        ac: "Room Cooler",
        meal: "Exclusive",
        provider: "owner",
        laundry: "self arranged",
        rent: 6000,
    },
    {
        image: noImage,
        key: '2',
        for: "Girls",
        location: "Rohini/Delhi/Delhi/East",
        occupancy: "Double",
        ac: "Room Cooler",
        meal: "Exclusive",
        provider: "owner",
        laundry: "self arranged",
        rent: 6000,
    },
    {
        image: noImage,
        key: '3',
        for: "Girls",
        location: "Rohini/Delhi/Delhi/East",
        occupancy: "Double",
        ac: "Room Cooler",
        meal: "Exclusive",
        provider: "owner",
        laundry: "self arranged",
        rent: 6000,
    },
    {
        image: noImage,
        key: '4',
        for: "Girls",
        location: "Rohini/Delhi/Delhi/East",
        occupancy: "Double",
        ac: "Room Cooler",
        meal: "Exclusive",
        provider: "owner",
        laundry: "self arranged",
        rent: 6000,
    },
    {
        image: noImage,
        key: '5',
        for: "Girls",
        location: "Rohini/Delhi/Delhi/East",
        occupancy: "Double",
        ac: "Room Cooler",
        meal: "Exclusive",
        provider: "owner",
        laundry: "self arranged",
        rent: 6000,
    },
    {
        image: noImage,
        key: '6',
        for: "Girls",
        location: "Rohini/Delhi/Delhi/East",
        occupancy: "Double",
        ac: "Room Cooler",
        meal: "Exclusive",
        provider: "owner",
        laundry: "self arranged",
        rent: 6000,
    },
    {
        image: noImage,
        key: '7',
        for: "Girls",
        location: "Rohini/Delhi/Delhi/East",
        occupancy: "Double",
        ac: "Room Cooler",
        meal: "Exclusive",
        provider: "owner",
        laundry: "self arranged",
        rent: 6000,
    },
    {
        image: noImage,
        key: '8',
        for: "Girls",
        location: "Rohini/Delhi/Delhi/East",
        occupancy: "Double",
        ac: "Room Cooler",
        meal: "Exclusive",
        provider: "owner",
        laundry: "self arranged",
        rent: 6000,
    },
    {
        image: noImage,
        key: '9',
        for: "Girls",
        location: "Rohini/Delhi/Delhi/East",
        occupancy: "Double",
        ac: "Room Cooler",
        meal: "Exclusive",
        provider: "owner",
        laundry: "self arranged",
        rent: 6000,
    },
];

const MyProperty = () => {
    const history = useHistory();
    const redirectToDetailPage = () => {
        history.push("/detailedPage");
    }
    return (
        <>
            <div className="dashboard-header">
                <AdvertisementPanelAndStats />
            </div>
            <Table className="table-content"
                columns={columns}
                dataSource={data}
                scroll={{ y: 250, x: 900 }}
                pagination={false}
            // onRow={(record, rowIndex) => {
            //     return {
            //         onClick: e => {
            //             // console.log('rowTouch--->>>', record)
            //             // return (
            //             //     <a href="/detailedPage"></a>
            //             // )
            //             redirectToDetailPage();
            //         }
            //     }
            // }}
            />
        </>
    );
}

export default MyProperty;