import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"

const StyledShaper = styled.div`
`

const Shaper = ({vertices, updateShape}) => {
  class Stringy {
    constructor(stringName) {
      this.stringName = stringName
    }

    toString() {
      console.log("attempt to stringify stringy");
      return `I'm stringy ${this.stringName}`
    }
  }

  const mixedArray = [1, 2, "string", ["array", "array"], {someObj: "regular string"}, new Stringy("first"), new Stringy("second")];

  mixedArray.join(",") // will be 1,2,string,array,array,[object Object],I'm stringy first,I'm stringy second

  return (
    <StyledShaper>
      {mixedArray.join(",")}
    </StyledShaper>
  );
}

Shaper.propTypes = {};
Shaper.defaultProps = {};

export default Shaper;