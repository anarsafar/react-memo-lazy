import { memo, useState } from "react";

const Test = memo(({ name, age }) => {
  console.log("component updated");
  return (
    <div>
      test component {name} {age.age}
    </div>
  );
});

export default Test;
