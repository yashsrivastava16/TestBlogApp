import React from 'react'
import "./topbar.css"

export default function TopBar() {
  return (
    <div className='topbar'>
      <div className="left">
        <i class="material-icons">facebook</i>&nbsp;&nbsp;
        <i class="material-icons">wb_cloudy</i>


      </div>
      <div className="center">HOME&nbsp;&nbsp;ABOUT&nbsp;&nbsp;CONTACT&nbsp;&nbsp;WRITE&nbsp;&nbsp;LOGOUT</div>
      <div className="right">
        <i class="material-icons">contacts</i>&nbsp;&nbsp;
        <i class="material-icons">search</i>
      </div>
    </div>
  )
}
