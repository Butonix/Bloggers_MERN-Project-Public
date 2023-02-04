import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllReports } from "../../store/actions/adminActions";
import { Link } from "react-router-dom";
import DataTable from "../../components/Admin/DataTable";

const Reports = () => {
  const [criteria, setCriteria] = useState("all");
  const dispatch = useDispatch();
  const {
    reports: { allReports },
    success,
  } = useSelector((state) => state.admin);

  const renderDataTableActions = (report) => (
    <div className="flex items-center gap-2">
      <Link
        className="bg-[#2D5CD0] text-white py-1 px-4 font-semibold shadow-md rounded hover:bg-blue-700"
        to={`detail/${report?._id}`}
      >
        Visit
      </Link>
    </div>
  );

  const renderReportsByCriteria = () => {
    if (criteria === "all") {
      return allReports;
    } else if (criteria === "date") {
      return allReports.sort((currentReport, nextReport) => {
        if (
          new Date(currentReport.createdAt).getTime() > new Date(nextReport.createdAt).getTime()
        ) {
          return -1;
        } else {
          return 1;
        }
      });
    } else {
      return allReports.sort((currentReport, nextReport) => {
        if (currentReport.status === "open") {
          return -1;
        } else {
          return 1;
        }
      });
    }
  };

  const dataHead = ["ID", "Status", "Submitter", "Actions"];
  const dataBody = renderReportsByCriteria().map((report) => [
    report._id.substr(0, 15),
    report.status,
    report.submittedBy.fullName,
    renderDataTableActions(report),
  ]);

  const handleChange = ({ target: { value } }) => setCriteria(value);

  useEffect(() => {
    if (success) {
      dispatch(fetchAllReports());
    }
    dispatch(fetchAllReports());
  }, [dispatch, success]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mt-12 dark:text-[#F7F7F7]">Reports</h1>
      <div className="w-full mt-10 flex items-center gap-3">
        <span className="dark:text-gray-300">Sort by:</span>
        <select
          name="category"
          value={criteria}
          onChange={handleChange}
          className="border-gray-200 border-[1px] w-36 focus:border-gray-300 focus:outline-none rounded-sm p2-3 py-1 bg-[#FAFAFA]"
        >
          <option value="all">All</option>
          <option value="date">Date</option>
          <option value="status">Status</option>
        </select>
      </div>
      <div className="mt-5">
        <DataTable dataHead={dataHead} dataBody={dataBody} itemWidth={180} />
      </div>
    </div>
  );
};

export default Reports;
