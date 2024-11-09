export default function AssignmentDeletion({
  assignmentId,
  assignmentTitle,
  deleteAssignment,
}: {
  assignmentId: string;
  assignmentTitle: string;
  deleteAssignment: (id: string) => void;
}) {
  const handleDelete = () => {
    deleteAssignment(assignmentId);
  };

  return (
    <div
      id="wd-delete-assignment-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Confirm Deletion{" "}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete "{assignmentTitle}"?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No{" "}
            </button>
            <button
              onClick={handleDelete}
              type="button"
              data-bs-dismiss="modal" // auto closes the modal
              className="btn btn-danger"
            >
              Yes{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
