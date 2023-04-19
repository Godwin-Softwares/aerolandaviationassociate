import React from 'react'
import css from './AboutUsBreadCrumbs.module.scss'

const AboutUsBreadCrumbs = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
         <div className={` ${css.container}`}>
            <span className={`primaryText2 ${css.title}`}>
                Bread Crumbs
            </span>
        </div>
    </div>
  )
}

export default AboutUsBreadCrumbs