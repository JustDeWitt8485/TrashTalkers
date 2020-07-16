import React from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import Application from './components/Application';
import PostsProvider from './providers/PostsProviders';

render(
    <PostsProvider>
        <Application />
    </PostsProvider>, 
    document.getElementById('root'),
    );
