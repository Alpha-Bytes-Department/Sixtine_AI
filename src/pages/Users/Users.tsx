const Users = () => {
  const users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      role: "doctor",
      status: "active",
      createdAt: "2023-10-01",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      role: "nurse",
      status: "inactive",
      createdAt: "2023-10-02",
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Johnson",
      email: "michael.johnson@example.com",
      role: "doctor",
      status: "active",
      createdAt: "2023-10-03",
    },
    {
      id: 4,
      firstName: "Sarah",
      lastName: "Williams",
      email: "sarah.williams@example.com",
      role: "admin",
      status: "active",
      createdAt: "2023-10-04",
    },
    {
      id: 5,
      firstName: "David",
      lastName: "Brown",
      email: "david.brown@example.com",
      role: "nurse",
      status: "active",
      createdAt: "2023-10-05",
    },
    {
      id: 6,
      firstName: "Emily",
      lastName: "Davis",
      email: "emily.davis@example.com",
      role: "doctor",
      status: "inactive",
      createdAt: "2023-10-06",
    },
    {
      id: 7,
      firstName: "Robert",
      lastName: "Miller",
      email: "robert.miller@example.com",
      role: "nurse",
      status: "active",
      createdAt: "2023-10-07",
    },
    {
      id: 8,
      firstName: "Lisa",
      lastName: "Wilson",
      email: "lisa.wilson@example.com",
      role: "admin",
      status: "active",
      createdAt: "2023-10-08",
    },
  ];

  return (
    <div className="flex-1  xl:px-10 px-4 text-[#4A4A4A]">
      <div className=" min-h-screen overscroll-y-auto">
        <h1 className=" xl:py-10 py-6 text-xl xl:text-3xl font-semibold">
          Users
        </h1>
        <input
          type="text"
          placeholder="Search users..."
          className=" bg-gray-300 max-w-sm focus:outline-0  rounded-md px-4 py-2 mb-4 w-full"
        />
        <div className=" xl:py-10 py-6">
          <ul className="grid grid-cols-4 text-lg py-1 font-semibold xl:text-xl   gap-4">
            <li>First Name</li>
            <li>Last Name</li>
            <li>Date Created</li>
            <li>Role</li>
          </ul>{" "}
          <hr className="border-t border-gray-300" />
          {
            users.map((user) => (
              <div>
                  <ul
                    key={user.id}
                    className="grid grid-cols-4 text-base  xl:text-lg py-2.5  gap-4"
                  >
                    <li>{user.firstName}</li>
                    <li>{user.lastName}</li>
                    <li>{user.createdAt}</li>
                    <li>{user.role}</li>
                  </ul>
                  <hr className="border-t border-gray-300" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
