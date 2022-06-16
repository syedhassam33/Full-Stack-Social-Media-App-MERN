import React from 'react'
import { useSelector } from 'react-redux'
import NestedPosts from './NestedPosts/NestedPosts.js'

const Posts = () => {
  const posts = useSelector((state)=> state.posts);
  console.log(posts);
  return (
      <>
        <div>Posts</div>
        <NestedPosts/>
        <NestedPosts/>
      </>
    
  )
}

export default Posts