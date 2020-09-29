import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>u sure</ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Hassan"
          comment="fatboy"
          timeAgo="4:45PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Adam"
          comment="Terasaur Leopard"
          timeAgo="6:45PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ana"
          comment="Waaah"
          timeAgo="2:45AM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
