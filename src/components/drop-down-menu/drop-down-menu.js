import React from "react";
import {
  DropDownWrapper,
  DropDownInnerContent,
  Left,
  Bottom,
  Right
} from "./drop-down-menu.style";

export const DropDownMenu = () => (
  <DropDownWrapper>
    <DropDownInnerContent>
      <span>
        1 Step Forward is a accountablity app.Based off the crietria you set.
      </span>
  
      <Left span="Left">
        Do you want to progress in the gym,use 1 step forward.
      </Left>

      <Right span="Right">
        Do you want to read more books to increase your knowlede, use 1 step
        forward.
      </Right>
      <Bottom span="Bottom">
        Do you what ever your goals are it's time to take one step foward!
      </Bottom>
    </DropDownInnerContent>
  </DropDownWrapper>
);
