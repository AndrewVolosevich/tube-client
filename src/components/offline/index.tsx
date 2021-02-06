import React from "react";
import Layout from "~/components/layout";
import PageTitle from "~/components/page-title/page-title";

const Offline = () => {
  return (
    <>
      <Layout>
        <PageTitle title={`Упс, кажется соединение с интернетом потеряно...`} />
      </Layout>
    </>
  );
};

export default Offline;
