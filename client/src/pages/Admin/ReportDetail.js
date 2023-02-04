import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { AiOutlineStar } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { MdReportGmailerrorred } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";
import { fetchReportDetails, closeReport } from "../../store/actions/adminActions";

const ReportDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { reportDetails: report, success } = useSelector((state) => state.admin);
  const totalRating =
    report?.post?.rating.ratings.reduce((acc, item) => (acc += item), 0) /
      report?.post?.rating.ratings.length || 0;

  const handleCLoseReport = () => dispatch(closeReport(id));

  useEffect(() => {
    dispatch(fetchReportDetails(id));
  }, [id, dispatch, success]);

  if (!report) {
    return (
      <h1 className="text-xl font-semibold text-red-600">
        An Error has occurred. Please try again
      </h1>
    );
  }
  return (
    <div className="flex flex-col items-center pb-5">
      <h1 className="text-xl mt-12 dark:text-[#F7F7F7]">Report Details</h1>
      <div className="w-[95%] md:w-3/4 lg:w-2/4 mx-auto mt-12 border-[1px] border-gray-200 rounded-md p-10 bg-[#fafafa] flex gap-5">
        <div className="flex-4">
          <img src={report.post.thumbnail} alt="blog thumbnail" className="w-[60px] h-[60px]" />
        </div>
        <div className="flex-1">
          <Link to={`/blog-read/${report.post._id}`}>
            <h1 className="font-bold">{report.post.title}</h1>
          </Link>
          <h3 className="text-sm mt-1">{report.post.author.fullName}</h3>

          <div className="mt-6">
            <p className="flex items-center gap-1 font-semibold text-sm">
              <AiOutlineStar className="text-2xl" />
              {totalRating} Rating
            </p>
            <p className="flex items-center gap-1 font-semibold my-2 text-sm">
              <FaRegComment className="text-2xl" />
              {report.post.comments.length || 0} Comments
            </p>
            <p className="flex items-center gap-1 font-semibold text-sm">
              <MdReportGmailerrorred className="text-2xl" />
              {report.post.reports.allReports.length || 0} Reports
            </p>
            <div className=" my-2 text-sm">
              <p className="font-semibold">Reported for:</p>
              {report.post.reports.reportedFor.length > 0 &&
                report.post.reports.reportedFor.map((reason, i) => <p key={i}>{reason}</p>)}
            </div>
            <div className=" my-2 text-sm">
              <p className="font-semibold">Status:</p>
              {report.status}
            </div>
          </div>

          <div className="text-sm leading-5 my-2 mb-3">
            <p className="font-semibold">Description:</p>
            {report.post.content.slice(0, 150)} ...
          </div>

          {report.status === "open" ? (
            <div className="flex items-center justify-around">
              <button className="border-[1px] border-red-600 text-red-600 bg-white rounded-sm font-semibold px-4 py-1 cursor-pointer hover:bg-red-600 hover:text-white transition-all">
                Remove Post
              </button>
              <button
                onClick={handleCLoseReport}
                className="border-[1px] border-gray-300 text-gray-500 bg-white rounded-sm font-semibold px-4 py-1 cursor-pointer hover:bg-gray-500 hover:text-white transition-all"
              >
                Close Report
              </button>
            </div>
          ) : (
            <h3 className="text-red-600">
              This report is marked as closed and therefore it can't be managed.
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportDetail;
