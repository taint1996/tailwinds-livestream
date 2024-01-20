import { useState } from "react";

interface User {
  id: number;
  name: string;
  job: string;
  avatar: string;
  tags: string[];
}

const users: User[] = [
  {
    id: 1,
    name: "Micheal Brown",
    job: "Teacher",
    avatar:
      "https://unsplash.com/photos/woman-in-blue-tank-top-standing-beside-white-wall-TXxiFuQLBKQ",
    tags: ["Digital Marketing", "SEO", "Social Media"],
  },
  {
    id: 2,
    name: "Olivia Davis",
    job: "Frontend Developer",
    avatar:
      "https://www.printables.com/model/346310-software-engineering-keychain",
    tags: ["HTML", "CSS", "Javascript", "React"],
  },
  {
    id: 3,
    name: "Emily Wilson",
    job: "UI/UX Designer",
    avatar:
      "https://www.printables.com/model/691907-mosaic-plant-pot-and-planter-vase-mode-design",
    tags: ["Adobe Photoshop", "Illustrator", "UI/UX Design"],
  },
  {
    id: 4,
    name: "Shen",
    job: "UI/UX Designer",
    avatar:
      "https://www.printables.com/model/691907-mosaic-plant-pot-and-planter-vase-mode-design",
    tags: ["Adobe Photoshop", "Illustrator", "UI/UX Design"],
  },
  {
    id: 5,
    name: "Jinx",
    job: "Frontend Developer",
    avatar:
      "https://www.printables.com/model/346310-software-engineering-keychain",
    tags: ["HTML", "CSS", "Javascript", "React"],
  },
  {
    id: 6,
    name: "Teth Adam",
    job: "Teacher",
    avatar:
      "https://www.printables.com/model/610339-avatar-the-last-airbender-wall-art",
    tags: ["Digital Marketing", "SEO", "Social Media"],
  },
];

export const UserList = () => {
  const FILTER: string[] = [
    "Reputation",
    "New users",
    "Voters",
    "Editors",
    "Moderators",
  ];

  const [query, setQuery] = useState("");
  const filteredUsers =
    query.length > 0
      ? users.filter((user) =>
          user.name.toLowerCase().includes(query.toLowerCase()),
        )
      : users;

  return (
    <div className="min-w-[40rem] rounded-lg bg-white p-16 shadow">
      <h1 className="font-meri text-3xl font-black">User</h1>
      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        <div>
          <div className="relative grow rounded-md border-2 border-gray-300">
            <input
              type="text"
              className="mr-2 w-full  px-4 py-3 pl-10"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search users"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
        <div>
          <div className="space-x-2">
            {FILTER.map((fil) => {
              return (
                <a
                  href="#"
                  id={fil}
                  className="mb-2 inline-block cursor-pointer rounded-lg bg-white px-4 py-3 hover:bg-[#849fff] hover:text-white"
                >
                  {fil}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => {
          return (
            <div
              key={user.name}
              className="flex cursor-pointer gap-x-4 rounded-xl bg-[#FBFCFF] p-6 hover:border-[1px] hover:border-[#BFC8E5] hover:shadow-lg"
            >
              <img
                src={`https://source.unsplash.com/random/${user.name}`}
                alt=""
                className="h-24 w-24 rounded-full"
              />
              <div>
                <h3 className="font-meri font-black">{user.name}</h3>
                <p className="font-popi text-sm">{user.job}</p>
                <div className="mt-4 space-x-2">
                  {user.tags.map((tag) => {
                    return (
                      <span
                        className="inline-block rounded-full border-[1px] border-slate-500 px-1 text-xs text-[#516FD4]"
                        key={tag}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
