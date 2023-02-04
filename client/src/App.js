import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser } from "./store/actions/authActions";
import { reportBlog } from "./store/actions/postsActions";
import { useDispatch, useSelector } from "react-redux";
import { useDarkModeContext, useModalContext } from "./context";
import { reportTypes } from "./constants/reportTypes";
import Modal from "./components/Modal";
import ConfirmModal from "./components/ConfirmModal";
import Spinner from "./components/Spinner";

// protected routes
import ProtectedRoute from "./util/protected-routes";
import ForbiddenRoute from "./util/forbidden-routes";
import AdminRoute from "./util/admin-routes";

//Pages
const Home = lazy(() => import("./pages/Home"));
const Auth = lazy(() => import("./pages/Auth"));
const Browse = lazy(() => import("./pages/Browse"));
const Bookmarks = lazy(() => import("./pages/Bookmarks"));
const Detail = lazy(() => import("./pages/Detail"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));

//Admin routes/pages
const Admin = lazy(() => import("./pages/Admin/Admin"));
const Welcome = lazy(() => import("./pages/Admin/Welcome"));
const Users = lazy(() => import("./pages/Admin/Users"));
const Blogs = lazy(() => import("./pages/Admin/Blogs"));
const Reports = lazy(() => import("./pages/Admin/Reports"));
const ReportDetail = lazy(() => import("./pages/Admin/ReportDetail"));

const App = () => {
  const { isModalOpen, setIsModalOpen, confirmModal, setConfirmModal } = useModalContext();
  const [selectedReportType, setSelectedReportType] = useState(reportTypes[0]);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const userLS = JSON.parse(localStorage.getItem("user"));
  const { isDarkMode } = useDarkModeContext();

  const handleReportBlog = () => {
    const { postId } = confirmModal;
    dispatch(reportBlog(postId, selectedReportType));
    setConfirmModal({
      isOpen: false,
      postId: null,
      title: "",
    });
    setSelectedReportType(reportTypes[0]);
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <Suspense
      fallback={
        <div className="w-full h-[100vh] dark:bg-black-200 flex items-center justify-center">
          <Spinner size={100} color="#2D5CD0" />
        </div>
      }
    >
      <div className={isDarkMode ? "dark" : ""}>
        <div className="dark:bg-[#20232A] min-h-screen relative">
          <Router>
            <ToastContainer />
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.BROWSE} element={<Browse />} />
              <Route
                path={ROUTES.BOOKMARKS}
                element={
                  <ProtectedRoute user={user || userLS} redirectPath={ROUTES.AUTH}>
                    <Bookmarks />
                  </ProtectedRoute>
                }
              />
              <Route
                path={ROUTES.AUTH}
                element={
                  <ForbiddenRoute user={user || userLS} redirectPath={ROUTES.HOME}>
                    <Auth />
                  </ForbiddenRoute>
                }
              />
              <Route path={ROUTES.PROFILE} element={<Profile />} />
              <Route path={ROUTES.DETAIL} element={<Detail />} />
              <Route
                path={ROUTES.ADMIN}
                element={
                  <AdminRoute user={user || userLS} redirectPath={ROUTES.HOME}>
                    <Admin />
                  </AdminRoute>
                }
              >
                <Route path={ROUTES.ADMIN_WELCOME} element={<Welcome />} />
                <Route path={ROUTES.ADMIN_USERS} element={<Users />} />
                <Route path={ROUTES.ADMIN_REPORTS} element={<Reports />} />
                <Route path={ROUTES.ADMIN_REPORT_DETAIL} element={<ReportDetail />} />
                <Route path={ROUTES.ADMIN_BLOGS} element={<Blogs />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          {isModalOpen && <Modal handleClose={() => setIsModalOpen(false)} />}
          {confirmModal.isOpen && (
            <ConfirmModal
              handleClose={() => setConfirmModal({ isOpen: false, postId: null, title: "" })}
              onConfirm={handleReportBlog}
              actionText={`Are you sure you want to report: `}
              titleText={confirmModal.title}
              confirmText="Confirm"
              cancelText="Cancel"
            >
              <div className="my-5">
                {reportTypes.map((type, idx) => (
                  <div key={idx} className="my-2">
                    <input
                      type="radio"
                      id={type}
                      name="reportType"
                      checked={type === selectedReportType}
                      onChange={({ target }) => setSelectedReportType(target.value)}
                      value={type}
                    />
                    <label className="ml-2" htmlFor={type}>
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </ConfirmModal>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default App;
