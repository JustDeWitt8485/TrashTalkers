import React, {useState} from 'react';

const AddComment = ({onCreate}) =>  {
  const [state, setState] = useState(' ')

  const handleChange = event => {
    console.log(event.target)
    const { name, value } = event.target;
    setState({ [name]: value });
  };

  const handleSubmit = event => {
    // console.log(state)
    event.preventDefault();
    onCreate(state)
    setState({ content: '' });
  };

  // render() {
    const { content } = state;
    return (
      <form onSubmit={handleSubmit} className="AddComment">
        <input
          type="text"
          name="content"
          placeholder="Comment"
          value={content}
          onChange={handleChange}
        />
        <input className="create" type="submit" value="Create Comment" />
      </form>
    );
  }
// }

export default AddComment;
