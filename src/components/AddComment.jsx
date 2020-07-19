import React, {useState, useContext} from 'react';
import PostsContext from '../providers/PostsProvider'

const AddComment = ({onCreate}) =>  {
  // state = { content: '' }; 
  const [state, setState] = useState(' ')
  const posts = useContext(PostsContext)
  // console.log(posts)

  const handleChange = event => {
    console.log(event.target)
    const { name, value } = event.target;
    setState({ [name]: value });
  };

  const handleSubmit = event => {
    // console.log(content)
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
