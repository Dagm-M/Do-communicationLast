import AdminLayout from "@/components/layouts/AdminLayout/AdminLayout";
import { useEffect, useState } from "react";
import { TbMessageCircle, TbSend } from "react-icons/tb";
import { allMembers } from "@/mock/members";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFileBlank, BiUser } from "react-icons/bi";
import { RiAttachment2 } from "react-icons/ri";
import { messages } from "../../../mock/messages";
import Link from "next/link";
import ReceiverMessage from "@/components/Message/ReceiverMessage";
import SenderMessage from "@/components/Message/SenderMessage";

const DirectChat = () => {
  const [messageTab, setMessageTab] = useState("recent");
  const [members, setMembers] = useState(allMembers);
  const [search, setSearch] = useState("");
  // search for groups using group name
  useEffect(() => {
    const filteredData = allMembers.filter(
      (item) =>
        item?.name && item?.name.toLowerCase().includes(search.toLowerCase())
    );

    if (search) {
      setMembers(filteredData);
    } else {
      setMembers(allMembers);
    }
  }, [search]);

  const renderRecent = () => {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between text-sm">
          <div className="flex w-full pr-4 mr-4 bg-white border rounded-md border-secondary ">
            <input
              type="Search messages"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-11/12 py-2 pl-4 bg-transparent outline-none"
              placeholder="Search"
            />
            <AiOutlineSearch className="w-6 h-auto" />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          {members.length > 0 &&
            members.slice(0, 3).map((member, index) => (
              <button
                key={index}
                className={`flex flex-row items-center p-2 rounded-xl ${
                  index === 1
                    ? "bg-secondary text-white"
                    : "hover:bg-opacity-25 hover:bg-secondary"
                }`}
              >
                <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full">
                  {member.name[0]}
                </div>
                <div className="flex flex-col items-start justify-start ml-4 font-semibold">
                  <p>{member.name}</p>
                  <p className="w-32 text-sm font-light truncate">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facilis accusamus ipsam officiis officia voluptates iusto,
                    porro minima architecto corrupti. Nam deserunt accusantium
                    natus labore numquam sunt voluptates aliquam aut. Quisquam.
                  </p>
                </div>
              </button>
            ))}

          {members.length === 0 && (
            <div className="flex flex-row items-center p-2 hover:bg-opacity-25 hover:bg-secondary rounded-xl">
              <div className="ml-2 text-sm font-semibold">No members found</div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderMembers = () => {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between text-sm">
          <div className="flex w-full pr-4 mr-4 bg-white border rounded-md border-secondary ">
            <input
              type="search members"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-11/12 py-2 pl-4 bg-transparent outline-none"
              placeholder="Search"
            />
            <AiOutlineSearch className="w-6 h-auto" />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          {members.length > 0 &&
            members.map((member, index) => (
              <button
                key={index}
                className={`flex flex-row items-center p-2  rounded-xl ${
                  index === 1
                    ? "bg-secondary text-white"
                    : "hover:bg-opacity-25 hover:bg-secondary"
                }`}
              >
                <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full">
                  {member.name[0]}
                </div>
                <div className="ml-2 text-sm font-semibold">{member.name}</div>
              </button>
            ))}

          {members.length === 0 && (
            <div className="flex flex-row items-center p-2 hover:bg-opacity-25 hover:bg-secondary rounded-xl">
              <div className="ml-2 text-sm font-semibold">No members found</div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <AdminLayout>
      <div class="relative w-full h-full">
        <div className="absolute grid w-full h-full grid-cols-4 gap-5 ">
          {/* Sidebar */}
          <div className="max-h-full col-span-1 px-4 py-5 bg-white shadow-md rounded-2xl">
            {/* Chat Logo with create message*/}
            <div className="flex items-center justify-center gap-2 text-3xl">
              <TbMessageCircle className="text-4xl text-secondary" />
              <h3 className="font-semibold">Direct Chat</h3>
            </div>

            {/* tab */}
            <div className="grid grid-cols-2 mt-6 font-semibold bg-gray-200 rounded-2xl">
              <button
                className={`py-2 rounded-2xl ${
                  messageTab === "recent" ? "bg-primary" : ""
                }`}
                onClick={() => setMessageTab("recent")}
              >
                Recent
              </button>
              <button
                className={`py-2 rounded-2xl ${
                  messageTab === "member" ? "bg-primary" : ""
                }`}
                onClick={() => setMessageTab("member")}
              >
                Members
              </button>
            </div>

            <div className="w-full max-h-[450px] overflow-x-hidden overflow-y-auto mt-4">
              {messageTab === "recent" ? renderRecent() : renderMembers()}
            </div>
          </div>
          {/* chatbox */}
          <div className="relative flex flex-col col-span-3 bg-white rounded-2xl">
            <header className="sticky top-0 flex flex-row justify-between w-full h-16 px-4 text-2xl font-semibold text-white bg-primary rounded-t-2xl">
              <div className="flex items-center gap-4">
                <BiUser className="w-10 h-10 text-4xl bg-gray-400 rounded-full" />
                John Doe
              </div>
            </header>
            {/* chatbox */}
            <div className="absolute w-full grid grid-cols-12 gap-y-2  h-[438px] bottom-16 overflow-x-hidden overflow-y-auto">
              {messages.map((msg) => {
                return msg.from.id === 1 ? (
                  <ReceiverMessage msg={msg} />
                ) : (
                  <SenderMessage msg={msg} />
                );
              })}
            </div>
            {/* sender form */}
            <div className="absolute bottom-0 flex flex-row items-center w-full h-16 px-4 bg-white border-t rounded-xl">
              <div>
                <label
                  htmlFor="file_upload"
                  className="flex items-center justify-center text-2xl text-gray-400 hover:text-gray-600"
                >
                  <RiAttachment2 />
                </label>
                <input
                  type="file"
                  id="file_upload"
                  name="file_upload"
                  className="hidden"
                />
              </div>
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="flex w-full h-10 pl-4 border rounded-xl focus:outline-none focus:border-indigo-300"
                  />
                </div>
              </div>
              <div className="ml-4">
                <button className="flex items-center justify-center flex-shrink-0 gap-2 px-4 py-1 text-white bg-primary hover:bg-Bold rounded-xl">
                  <span>Send</span>
                  <TbSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

const receiverMessage = () => {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-primary">
          L
        </div>
        <div className="relative px-4 py-2 ml-3 text-sm bg-white shadow rounded-xl">
          <div>Hey How are you today?</div>
        </div>
      </div>
    </div>
  );
};

const senderMessage = () => {
  return (
    <div className="col-start-6 col-end-13 p-3 rounded-lg">
      <div className="flex flex-row-reverse items-center justify-start">
        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full bg-primary">
          A
        </div>
        <div className="relative px-4 py-2 mr-3 text-sm bg-indigo-100 shadow rounded-xl">
          <div>I'm ok what about you?</div>
        </div>
      </div>
    </div>
  );
};

export default DirectChat;
