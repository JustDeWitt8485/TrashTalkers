import React from 'react'
import {Card} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

const SupportPage = () => {
    return (
        <>
        <div>
            <Card>
                <Card.Body>
                <Card.Title>2 Minute Timeout</Card.Title>
                <Card.Text></Card.Text>
                </Card.Body>
                <br/>
                <Card.Body>
                <Card.Title>5 Minute Meditation</Card.Title>
                <Card.Text></Card.Text>
                </Card.Body>
                <br/>
                <Card.Body>
                <Card.Title>Talk to a friend</Card.Title>
                <Card.Text></Card.Text>
                </Card.Body>
                <br/>
                <Card.Body>
                <Card.Title> 
                    <Card.Link href = 'https://www.youtube.com/watch?v=4pKly2JojMw&amplist=PLW0v0k7UCVrkh5WZyHu0d0fWnaNgbmQTw'>
                    Move your body / 10 minute yoga 
                    </Card.Link>
                    </Card.Title>
                <Card.Text>

                </Card.Text>
                </Card.Body>
                <br/>
                <Card.Body>
                <Card.Title>5 senses check-in</Card.Title>
                <Card.Text></Card.Text>
                </Card.Body>
                <br/>
                <Card.Body>
                <Card.Title>Laugh</Card.Title>
                <Card.Text></Card.Text>
                </Card.Body>
                <br/>
            </Card>
        </div>
        </>
    )
}
export const SupportPage