import React from "react";
import "./ApplyGallery.css";

function ApplyGallery(props: any) {
  return (
    <article className="applyPage__gallery">
        <div className="applyPage__galleryapplyPage__gallerySlides">
          <input type="radio" name="r" id="r1" checked />
          <input type="radio" name="r" id="r2" checked />
          <input type="radio" name="r" id="r3" checked />
          <input type="radio" name="r" id="r4" checked />
          <input type="radio" name="r" id="r5" checked />
          <div className="applyPage__gallerySlide s1">
            <img src={props.gallery1} alt="" />
          </div>
          <div className="applyPage__gallerySlide">
            <img src={props.gallery2} alt="" />
          </div>
          <div className="applyPage__gallerySlide">
            <img src={props.gallery3} alt="" />
          </div>
          <div className="applyPage__gallerySlide">
            <img src={props.gallery4} alt="" />
          </div>
          <div className="applyPage__gallerySlide">
            <img src={props.gallery5} alt="" />
          </div>
        </div>
        <div className="applyPage__galleryNavigation">
          <label
            htmlFor="r1"
            className="applyPage__galleryNavigationBar"
          ></label>
          <label
            htmlFor="r2"
            className="applyPage__galleryNavigationBar"
          ></label>
          <label
            htmlFor="r3"
            className="applyPage__galleryNavigationBar"
          ></label>
          <label
            htmlFor="r4"
            className="applyPage__galleryNavigationBar"
          ></label>
          <label
            htmlFor="r5"
            className="applyPage__galleryNavigationBar"
          ></label>
        </div>
    </article>
  );
}
export default ApplyGallery;
