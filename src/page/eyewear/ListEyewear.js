import React from "react";
import { useNavigate } from "react-router-dom";
import EyewearCard from "../../component/EyewearCard";
import { frameData } from "../../component/DummyData";

const ListEyewear = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div class="blog-posts blogpage-section background-gradient">
        <div class="container">
          <div
            class="row wow fadeInUp"
            style={{visibility: "visible", animationName: "fadeInUp"}}
          >
            <div id="blog" class="col-xl-12">
              <div class="row">
             {frameData?.map((product,i)=>{
                return(
                <div class="col-xl-3 col-lg-6 col-md-6">
                  <EyewearCard data={product} />
                  {/* <!--col--> */}
                </div>
                )
             })}
              </div>
              {/* <!--blog--> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListEyewear;
