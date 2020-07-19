import React from 'react';

function NotFound() {

   return (
      <React.Fragment class="mainbox">
         <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet"></link>
         <script src="https://kit.fontawesome.com/4b9ba14b0f.js" crossorigin="anonymous"></script>
         <link rel="stylesheet" href="./style.css" />

         <div class="mainbox">
            <div class="err">4</div>
            <div class="far">0</div>
            <div class="err2">4</div>
            <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first
            place?<p>Let's go <a href="/">home</a> and try from there.</p>
            </div>
         </div>
      </React.Fragment>
   )
}

export default NotFound;