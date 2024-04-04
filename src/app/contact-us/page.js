import Container from "@/Components/shared/Container";
import React from "react";

const ContactUs = () => {
  return (
    <div className="my-4 max-w-8xl mx-auto px-8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="col-span-1 h-72 border"></div>
          <div className="col-span-3 p-4  border">
            <form>
              <div className="flex mb-3 gap-2 flex-col lg:flex-row">
                <input
                  className="w-full border rounded-md px-3 py-2 bg-[#F5F5F5]"
                  type="text"
                  placeholder="Your Name *"
                />
                <input
                  className="w-full border rounded-md px-3 py-2 bg-[#F5F5F5]"
                  type="text"
                  placeholder="Your Name *"
                />
                <input
                  className="w-full border rounded-md px-3 py-2 bg-[#F5F5F5]"
                  type="text"
                  placeholder="Your Name *"
                />
              </div>
              <textarea  className="w-full border rounded-md px-3 py-2 bg-[#F5F5F5]" name="message" id="" cols="8" rows="10"></textarea>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
