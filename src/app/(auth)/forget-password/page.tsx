import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>Forgot page</div>
      <Link href="/login">Back to login </Link>
    </>
  );
};

export default page;
