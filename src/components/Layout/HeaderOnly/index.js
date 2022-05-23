import Header from "~/components/Layout/components/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <h2>Header Only</h2>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
