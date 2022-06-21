import { 
    Card, CardHeader, Nav, TabPane, CardTitle, CardText,
    NavLink, NavItem, TabContent, Table,
} from 'reactstrap';
import { useState } from 'react';

const ExampleCard = () => {
    const [ activeTab, setActiveTab ] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <Card className=''>
                <CardHeader>
                    <Nav tabs id='cardTab'>
                        <NavItem>
                            <NavLink 
                                className={activeTab === '1' ? "active" : ""}
                                onClick={() => {
                                    toggle('1');
                                }} 
                                id='supplies-tab' 
                                type='button'
                            >Supplies
                            </NavLink>
                            <NavLink 
                                className={activeTab === '2' ? "active" : ""}
                                onClick={() => {
                                    toggle('2');
                                }}  
                                id='sutures-tab' 
                                type='button'
                            >Sutures
                            </NavLink>
                            <NavLink 
                                className={activeTab === '3' ? "active" : ""}
                                onClick={() => {
                                    toggle('3');
                                }}  
                                id='instruments-tab' 
                                type='button'
                            >Instruments
                            </NavLink>
                            <NavLink 
                                className={activeTab === '4' ? "active" : ""}
                                onClick={() => {
                                    toggle('4');
                                }}  
                                id='notes-tab' 
                                type='button'
                            >Notes
                            </NavLink>
                        </NavItem>
                    </Nav>
                </CardHeader>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId='1'>
                        <CardTitle>
                            <h5>Dr. XYZ</h5>
                        </CardTitle>
                        <CardText>
                            <h6>Lap Chole</h6>
                        </CardText>
                        <Table hover striped>
                            <thead>
                                <tr>
                                <th scope="col">Open</th>
                                <th scope="col">Hold</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>General Pack</td>
                                    <td>Laps</td>
                                </tr>
                                <tr>
                                    <td>Ligasure</td>
                                    <td>Stapler 45mm</td>
                                </tr>
                                <tr>
                                    <td>Bovie</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Raytechs</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Fish</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Suction tubing</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Yankeur Tip</td>
                                    <td></td>
                                </tr>
                            </tbody>
                            <caption>List of supplies</caption>
                        </Table>
                    </TabPane>
                </TabContent>
            </Card>
        </>
    )
}

export default ExampleCard;