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
                <Card.Text>
                    Excuse yourself. Go somewhere quiet. Breathe regularly. Count each time you breathe out for two minutes.
                </Card.Text>
                </Card.Body>
                <br/>
                <Card.Body>
                <Card.Title>5 Minute Meditation</Card.Title>
                <Card.Text>Decompress with a five-minute guided meditation on an app.</Card.Text>
                </Card.Body>
                <br/>
                <Card.Body>
                <Card.Title>Talk to a friend</Card.Title>
                <Card.Text>Talk to a trusted friend who's not also upset. It's easier for them to see things in perspective.
                    <br />
                    Or, reach out to a professional, such as <a href='https://www.talkspace.com/'>Talk Space</a>.
                </Card.Text>
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