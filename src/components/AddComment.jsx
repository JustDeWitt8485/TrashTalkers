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
      padding = '3rem'
      bg='light'
      border="info"
      style={{
        width:'32rem',
        margin:"1rem",
        fontSize:"120%"}}
      onSubmit={handleSubmit} 
      className="AddComment"
      >
        <input
        style={{fontSize:'150%'}}
          type="text"
          // name="content"
          placeholder="Comment"
          value={state.value}
          onChange={handleChange}
        />
        <Button
        style={{fontSize:'150%'}}
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
