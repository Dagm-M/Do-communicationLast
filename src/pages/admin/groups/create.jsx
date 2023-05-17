import AdminLayout from "@/components/layouts/AdminLayout/AdminLayout";

const AddGroup = () => {

  return(
    <AdminLayout>
      <div className="min-h-screen p-6 pt-8 bg-gray-100 flex  justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600 pb-4 pt-0">Create Group</h2>
            <div className="bg-white rounded shadow-sm p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg pb-3 pl-4">Group Details</p>
                  <img src="/images/group.svg" alt="form" width={250} height={800} className="pt-10 sm:pb-3" />
                </div>

                <div className="lg:col-span-2 ">
                <div className="grid gap-6 gap-y-5 text-sm grid-cols-1 md:grid-cols-6">
                  <div className="md:col-span-3">
                    <label for="full_name">Group Name</label>
                    <input
                      type="text"
                      name="group_name"
                      id="group_name"
                      className="h-10 border mt-1 rounded px-4  w-full bg-gray-50"
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label for="type">Department</label>
                    <input
                      type="text"
                      name="department"
                      id="department"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label for="projectManager">Project Manager</label>
                    <input
                      type="text"
                      name="project_manager"
                      id="project_manager"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="assign project manager"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label for="members">Members</label>
                    <input
                      type="text"
                      name="members"
                      data-role="taginput"
                      data-tag-trigger="Space"
                      id="project_manager"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="add members"
                    />
                    
                  </div>

                  <div className="md:col-span-6 text-right ml-auto">
                    <div className="inline-flex items-end justify-end">
                      <div className="flex-row gap-10 pt-8">
                        <button className="bg-gray-300 hover:bg-primary text-balck  font-bold py-2 px-4 mr-6 rounded border-b-2">
                          Cancel
                        </button>
                        <button className="bg-primary hover:bg-bold text-white font-bold py-2 px-4 rounded">
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AddGroup;