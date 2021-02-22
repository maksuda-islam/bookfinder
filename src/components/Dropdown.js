import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropDown = (props) => {
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onSelect={props.onSelectAZ}> A-Z </Dropdown.Item>
                <Dropdown.Item onSelect={props.onSelectZA}> Z-A </Dropdown.Item>
                <Dropdown.Item onSelect={props.onSelectNewest}> Newest </Dropdown.Item>
                <Dropdown.Item onSelect={props.onSelectOldest}> Oldest </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
export default DropDown;
