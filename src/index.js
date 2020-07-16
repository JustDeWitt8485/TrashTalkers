import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import Application from './components/Application';
import PostsProvider from './providers/PostsProvider';
import UserProvider from './providers/UserProvider';

render(
    <UserProvider>
    <PostsProvider>
        <Application />
    </PostsProvider> 
    </UserProvider>,
    document.getElementById('root'),
    );
