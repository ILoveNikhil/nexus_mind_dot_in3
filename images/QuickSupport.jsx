import React from "react";
import "./QuickSupport.css";
import img_1 from "../../images/18.png";
import img_2 from "../../images/19.png";
import img_3 from "../../images/20.png";
import img_4 from "../../images/21.png";

const QuickSupport = () => {
  return (
    <section class="QuickSupport_Section">
      <h5>
        A LEADING DIGITAL MARKETING AGENCY <br /> FOR PURPOSE
      </h5>
      <section>
        {/* 1 */}
        <div>
          <div className="image">
            <img src={img_1} alt="img_18" />
          </div>
          <h6 class="text">QUICK RESULTS</h6>
          <p>
            Our digital marketing plans are the fast <br /> track to success for
            any business with <br /> customized services designed for your
            <br /> needs, you'll be achieving top results in <br /> no time!
          </p>
        </div>
        {/* 2 */}
        <div>
          <div className="image">
            <img src={img_2} alt="img_18" />
          </div>
          <h6 class="text">EXPERT TEAM</h6>
          <p>
            Meet our expert team. Masters of their <br /> craft, they fuel our
            success with unmatched <br /> expertise and passion for excellence.
            Elevate <br />
            your projects with their skills today
          </p>
        </div>
        {/* 3 */}
        <div>
          <div className="image">
            <img src={img_3} alt="img_18" className="img_3" />
          </div>
          <h6 class="text">24x7 SUPPORT</h6>
          <p>
            With 24/7 assistance for all your needs <br /> and queries, we make
            sure that you get <br /> answers as quickly as possible
          </p>
        </div>
        {/* 4 */}
        <div>
          <div className="image">
            <img src={img_4} alt="img_18" className="img_4" />
          </div>
          <h6 class="text">WE GUARANTEE A BETTER SERP RANKING</h6>
          <p>
            our SEO specialists will implement the <br /> best strategies to
            maximize your SERP <br /> visibility and drive targeted visitors to
            <br /> your website, resulting in increased <br /> profits.
          </p>
        </div>
      </section>
    </section>
  );
};

export default QuickSupport;
