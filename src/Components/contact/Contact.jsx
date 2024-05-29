import React from "react";

export default function Contact() {
  return (
    <div className="flex xl:justify-center xl:items-center max-md:pb-[150px] md:pb-[500px] w-[100%]">
      <div className="max-w-[1320px] xl:flex max-xl:flex-col xl:justify-center xl:items-center">
        <div>
          <div className="xl:flex max-xl:flex-col relative max-w-[1320px] justify-center max-xl:px-[5%] xl:px-[10%] w-[100%]">
            <div className="xl:w-[40%]">
              <div className="text-[#333333] text-[14px] font-bold leading-[24px] tracking-[2.8px]  uppercase">
                SERVICES
              </div>
              <h1 className="max-md:text-[35px] max-md:leading-[40px] md:text-[48px] font-bold text-[#00996d] md:leading-[55px] w-[100%]">
                Would you
                <br />
                like to discuss <br />a project?
              </h1>
            </div>

            <div className="xl:w-[60%] flex-col xl:ml-[70px] flex justify-center items-center">
              <div className="mb-[21px] pt-[45px]  md:pr-[18px] text-[#777777] text-[18px] leading-[31px] tracking-[0.27px]">
                Are you interested in collaborating and working with our
                experts? Please don’t hesitate to contact us.
              </div>
              <form
                action="
              "
                className="w-[100%] mt-[20px]"
              >
                <input
                  type="text"
                  required
                  className="border-b-[2px] focus:outline-none w-[100%] border-[#d7d7d7] py-[35px]  text-[18px] leading-[31px] mb-[25px] h-[2rem]"
                  name="name"
                  placeholder="Name"
                />{" "}
                <br />
                <input
                  type="email"
                  className="border-b-[2px] w-[100%] focus:outline-none border-[#d7d7d7] py-[35px] text-[18px] leading-[31px] mb-[25px] h-[2rem]"
                  name="email"
                  placeholder="Email"
                  required
                />
                <br />
                <textarea
                  rows={3}
                  cols={4}
                  placeholder="Message"
                  className="border-b-[2px] focus:outline-none  w-[100%] border-[#d7d7d7]  text-[18px] leading-[31px] mb-[25px] "
                  name="message"
                  required
                />
                <br />
                <button type="submit" className="text-[18px] leading-[18px] font-bold bg-[#255852] hover:bg-green-900 transition-all text-[#ffffff] pt-[10px] pb-[11px] mt-[39px] rounded-r-full  rounded-l-full px-[26px]">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
