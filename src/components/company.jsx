const Company = ({ leave, enter }) => {
  return (
    <>
      <dialog
        onMouseEnter={enter}
        onMouseLeave={leave}
        className="absolute left-64 top-16 m-0 flex rounded-lg p-4 text-mediumGray shadow-2xl"
      >
        <ul className="flex flex-col gap-2">
          <li>
            <a
              className="transition duration-300 ease-in-out hover:text-almostBlack"
              href="#"
            >
              History
            </a>
          </li>
          <li>
            <a
              className="transition duration-300 ease-in-out hover:text-almostBlack"
              href="#"
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              className="transition duration-300 ease-in-out hover:text-almostBlack"
              href="#"
            >
              Blog
            </a>
          </li>
        </ul>
      </dialog>
    </>
  );
};

export default Company;
