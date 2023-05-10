



import React from "react";
// import { useRecoilValue } from "recoil";
// import { loginAtom } from "../../atom/Atom";
// import { atom, useRecoilState, useRecoilValue } from "recoil";
// import { loginAtom } from "../../atom/Atom";
// import { selectorValue } from "../../selector/selector

import "./Activities.css";
// import { useRecoilState } from "recoil";
// import { loginAtom } from "../../atom/Atom";

function Activities(atomData) {
  // const [logValue, setLogValue] = useRecoilState(loginAtom);
  // const planData =useRecoilValue(loginAtom)
  let cards = [
    "activity1  haiijdoi hkd fioedn   hjw eh wuhe edjhif hf fueighnei fiorf refjehfne dugweuy gyf",
    "activity2  geu rbw  ujj  hrnf  jdr  ir  i rer er fuehnfr fiur rfrejhf gnhtroghghighb ghhgtrgtr gg gh gue",
    "activity3 eu rbw  ujj  hrnf  jdr  ir  i rer er fuehnfr fiur rfrejhf gnhtroghghighb ghhgtrgtr gg gh gue",
    "activity4 eu rbw  ujj  hrnf  jdr  ir  i rer er fuehnfr fiur rfrejhf gnhtroghghighb ghhgtrgtr gg gh gue",
    " Activity5 eu rbw  ujj  hrnf  jdr  ir  i rer er fuehnfr fiur rfrejhf gnhtroghghighb ghhgtrgtr gg gh gue",
    "activity6 eurbw  ujj  hrnf  jdr  ir  i rer er fuehnfr fiur rfrejhf gnhtroghghighb ghhgtrgtr gg gh gue",
    "activity1  haiijdoi hkd fioedn   hjw eh wuhe edjhif hf fueighnei fiorf refjehfne dugweuy gyf",
    "activity2  geu rbw  ujj  hrnf  jdr  ir  i rer er fuehnfr fiur rfrejhf gnhtroghghighb ghhgtrgtr gg gh gue",
    "activity3 eu rbw  ujj  hrnf  jdr  ir  i rer er fuehnfr fiur rfrejhf gnhtroghghighb ghhgtrgtr gg gh gue",
    "activity4 eu rbw  ujj  hrnf  jdr  ir  i rer er fuehnfr fiur rfrejhf gnhtroghghighb ghhgtrgtr gg gh gue",
    " Activity5 eu rbw  ujj  hrnf  jdr  ir  i rer er fuehnfr fiur rfrejhf gnhtroghghighb ghhgtrgtr gg gh gue",
    "activity6 eurbw  ujj  hrnf  jdr  ir  i rer er fuehnfr fiur rfrejhf gnhtroghghighb ghhgtrgtr gg gh gue ",
  ];
  // const planData = useRecoilValue(selectorValue);
  // console.log(planData)
  

  return (
    <>
      <div className="activity">
        {cards.map((value) => (
          <div className="activity-c"><p>cards</p>{value}</div>
        ))}

    
  </div>
    </>
  );
}

export default Activities;