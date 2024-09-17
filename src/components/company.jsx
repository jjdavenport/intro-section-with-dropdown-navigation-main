const Company = ({ leave, enter }) => {
  return (
    <>
      <dialog
        onMouseEnter={enter}
        onMouseLeave={leave}
        className="absolute left-40 m-0 flex"
      >
        <ul>
          <li>
            <a href="#">History</a>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </dialog>
    </>
  );
};

export default Company;
