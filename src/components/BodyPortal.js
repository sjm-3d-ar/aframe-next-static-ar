import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

export default function BodyPortal({ children }) {
  const container = document.body;

  return createPortal(children, container);
}

BodyPortal.propTypes = {
  children: PropTypes.node.isRequired,
};
