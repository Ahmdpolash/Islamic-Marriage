import React from "react";
import Container from "../shared/Container";

const NewMember = () => {
  return (
    <div>
      <Container>
        <div className="text-center">
          <h2 className="font-bold text-[18px]  lg:text-[24px] text-purple tracking-wider">
            New Member
          </h2>
          <p className="my-2 font-medium">
            Every user registered on Muslim Marriagebd is verified via photo and
            mobile phone so you don’t have to worry how <br /> real or fake
            anyone is..
          </p>
        </div>
      </Container>
    </div>
  );
};

export default NewMember;
