import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';

const AddComment = ({onCreate}) =>  {
  const [state, setState] = useState('')

  const handleChange = event => {
    // console.log(event.target)
    // const { name, value } = event.target;
    setState({ value: event.target.value });
  };

  const handleSubmit = event => {
    // console.log(content)
    event.preventDefault();
    onCreate(state)
    setState({ value: '' });
  };
    return (
      <Form 
      style ={{
        display:'flex',
        margin:'auto',
        flexDirection:'column',
        alignItems:'center',
      }}
      onSubmit={handleSubmit} 
      className="AddComment"
      >
        <input
          type="text"
          // name="content"
          placeholder="Comment"
          value={state.value}
          onChange={handleChange}
        />
        <Button
        variant = "outline-info"
        as="input" 
        className="create"
        type="submit" 
        value="Create Comment" 
        />
      </Form>
    );
  }
// }

export default AddComment;
