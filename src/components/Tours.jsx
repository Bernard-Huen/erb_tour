import React from 'react'
import tours from '../data'
import Title from "./Title"

function Tours() {
  return (
    <section className="section" id="tours" >
    <Title main_title='featured' sub_title='tours' />
                {/* <div className="section-title">
                    <h2>Featured <span>Tours</span></h2>
                </div> */}
    <div className="section-center featured-center">
         <article className="tour-card">
            <div className="tour-img-container">
                <img src="./images/seagulls.jpg"  className="tour-img" alt=""/>
                <p className="tour-date">Aug 26th, 2024</p>
            </div>
            <div className="tour-info">
                <h4>Tibet Adventure</h4>
                <p>lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facere in culpa odio repudiandae, cupiditate natus architecto reprehenderit hic autem!</p>
            </div>
            <div className="tour-footer">
               <ul className="tour-footer-info">
                <li><i className="fa-solid fa-map-location-dot"></i></li>
                <li>6 days</li>
                <li>from $2100</li>
            </ul>
            </div>
         </article>
         <article className="tour-card">
            <div className="tour-img-container">
                <img src="./images/seagull1.jpg" className="tour-img" alt=""/>
                <p className="tour-date">Aug 26th, 2024</p>
            </div>
            <div className="tour-info">
                <h4>Tibet Adventure</h4>
                <p>lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facere in culpa odio repudiandae, cupiditate natus architecto reprehenderit hic autem!</p>
            </div>
            <div className="tour-footer">
               <ul className="tour-footer-info">
                <li><i className="fa-solid fa-map-location-dot"></i></li>
                <li>6 days</li>
                <li>from $2100</li>
            </ul>
            </div>
         </article>
         <article className="tour-card">
            <div className="tour-img-container">
                <img src="./images/maldives.jpg" className="tour-img" alt=""/>
                <p className="tour-date">Aug 26th, 2024</p>
            </div>
            <div className="tour-info">
                <h4>Tibet Adventure</h4>
                <p>lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facere in culpa odio repudiandae, cupiditate natus architecto reprehenderit hic autem!</p>
            </div>
            <div className="tour-footer">
               <ul className="tour-footer-info">
                <li><i className="fa-solid fa-map-location-dot"></i></li>
                <li>6 days</li>
                <li>from $2100</li>
            </ul>
            </div>
         </article>
         <article className="tour-card">
            <div className="tour-img-container">
                <img src="./images/daepo.jpg" className="tour-img"  alt=""/>
                <p className="tour-date">Aug 26th, 2024</p>
            </div>
            <div className="tour-info">
                <h4>Legend Gundam</h4>
                <p>lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facere in culpa odio repudiandae, cupiditate natus architecto reprehenderit hic autem!</p>
            </div>
            <div className="tour-footer">
               <ul className="tour-footer-info">
                <li><i className="fa-solid fa-map-location-dot"></i></li>
                <li>6 days</li>
                <li>from $2100</li>
            </ul>
            </div>
         </article>
</div>
    </section>
  )
}

export default Tours