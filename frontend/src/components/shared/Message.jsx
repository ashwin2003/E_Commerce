import React from "react";

const Message = ({ children }) => {
  return (
    <div class="alert alert-dismissible alert-warning">
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      <h4 class="alert-heading">{children}</h4>
      <p class="mb-0">
        <a href="/" class="alert-link">
          Go to Homepage
        </a>
        .
      </p>
    </div>
  );
};

export default Message;
