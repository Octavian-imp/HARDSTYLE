const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen duration-500 dark:bg-dark dark:text-white bg-white text-black">
      {children}
    </div>
  );
};
export default Layout;
