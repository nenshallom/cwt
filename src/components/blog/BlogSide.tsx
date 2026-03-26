import React from 'react'
import BlogAbout from './BlogAbout'
import BlogSearch from './BlogSearch'
import RecentPost from './RecentPost'
import NewsLetter from './NewsLetter'
import Contact from './Contact'
import Category from './Category'
import Tags from './Tags'

type Props = {}

const BlogSide = (props: Props) => {
  return (
    <div className='lg:w-[25%]  lg:py-20 px-10 lg:px-0 mb-10 '>
      <BlogAbout />
      <BlogSearch />
      <RecentPost />
      <Category />
      <Tags />
      <NewsLetter />
      <Contact />
    </div>
  )
}

export default BlogSide