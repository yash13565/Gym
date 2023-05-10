import React, { useState } from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";
import { useNavigate } from "react-router";
import { useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { loginAtom } from "../../atom/Atom";
// import Activities from "../Activities/Activities";
function Plans() {
  const navigate = useNavigate();
  const [planValue, setPlan] = useState(0)
  const [subscribed, setSubscribe] = useState(false)
  // const [planAtom, setPlanAtom] = useRecoilState(loginAtom);
 
  
    function subscribe(e) {
      if (window.confirm("want to subscribe")) {
        navigate("../Activities/Activities");
        // console.log(e.target.name)
        setPlan(e.target.name)
        setSubscribe(!subscribed)
        // setPlanAtom(planValue)

      }
    }
    return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START </span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      <div className="plans">
        {plansData.map((plan, k) => (
          <div className="plan">
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className="features">
              {plan.features.map((features, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{features}</span>
                </div>
              ))}
            </div>
            <div>
              <span>see more benefits </span>
            </div>
            <button name={plansData[k].price} onClick={subscribe} className="btn" >
              {subscribed ? <div>Subscribed</div> : <div>Subscribe</div>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
