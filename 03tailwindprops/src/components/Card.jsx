import React from 'react'

function Card({username,btnText ="visit me"}) {
  return (
    <>
     <div className="w-60 h-60 rounded-xl">
          <img
            src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
            alt="Giphy"
            className="rounded-t-xl mt-12 mb-8"
          />
          <div className="glass py-4 mt-6   relative -top-[3.4rem]  rounded-b-xl z-10 ">
            <h1 className="font-bold  font-mono  text-xl ">{username}</h1>
          <button >{btnText} </button>
          </div>
        </div>
     
    
    </>
  )
}

export default Card