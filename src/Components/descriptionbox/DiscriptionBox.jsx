import React from 'react'
import "../descriptionbox/DiscriptionBox.css"

const DiscriptionBox = () => {
  return (
    <div className='discriptionbox'>
      <div className="discriptionbox-navigator">
        <div className="discriptionbox-nav-box">Description</div>
        <div className="discriptionbox-nav-box fade">Reviews (122)</div>

      </div>
      <div className="discriptionbox-discription">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed provident deleniti quos, iusto dolorum, cupiditate suscipit pariatur repudiandae assumenda omnis placeat id natus iure tempore quasi, aliquam magni harum magnam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit provident quisquam necessitatibus ipsam debitis hic. Suscipit, consectetur corporis. Ab assumenda laudantium mollitia quod cumque eaque et modi unde incidunt?</p>
      </div>
    </div>
  )
}

export default DiscriptionBox
