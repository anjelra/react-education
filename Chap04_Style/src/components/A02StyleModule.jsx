import React from "react";

// CSS가 다른 이름으로 등록된다. .module을 붙이게 되면 브라우저를 보면 이름을 replace해줘서 중복될 리가 없다.
import one from './css/A02Style1.module.css'
import two from './css/A02Style2.module.css'

function A02StyleModule() {
  return (
    <div>
      {/* module로 등록했더라도.. 앞에 global을 붙인 거는 실제 class를 쓰는 것처럼 붙이면 된다. */}
      <h3 className={one.title}>A02 Style <span className="innerColor">Module</span> Component</h3>

      {/* 적용할 css가 2개이면 ``을 주고 ${적용할 클래스} 로 주면 된다. */}
      <h3 className={`${two.title} ${two.reverse}`}>A02 Style Module Component</h3>
      <h3 className={[two.title, two.reverse].join(' ')}>A02 Style Module Component</h3>
    </div>
  );
}

export default A02StyleModule;
