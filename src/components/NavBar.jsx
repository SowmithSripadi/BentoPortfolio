import React from "react";

function NavBar() {
  return (
    <>
      <nav className="flex items-center p-4">
        <div className="ml-auto flex lg:space-x-36 md:space-x-36 mt-10 lg:mr-20 md:mr-20 mr-10 space-x-12">
          <p className="cursor-pointer">Heading 1</p>
          <p className="cursor-pointer">Heading 2</p>
          <p className="cursor-pointer">Heading 3</p>
        </div>
      </nav>
      <p className="text-center mt-10 text-3xl cursor-pointer">Home</p>
    </>
  );
}

export default NavBar;
