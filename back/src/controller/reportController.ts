import { report } from "../interface";
import { reportService } from "../services";
import { AsyncRequestHandler } from "../types";

interface reportControllerInterface {
  findReportedPosts: AsyncRequestHandler;
  findByPostId: AsyncRequestHandler;
  create: AsyncRequestHandler;
  delete: AsyncRequestHandler;
}

export class ReportController implements reportControllerInterface {
  create: AsyncRequestHandler = async (req, res) => {
    const { postId } = req.params;
    const intPostId = parseInt(postId);
    const { userId, type } = req.body;
    const intUserId = parseInt(userId);
    const intType = parseInt(type);

    const postReportInfo: report = {
      postId: intPostId,
      userId: intUserId,
      type: intType,
    };
    const reportPost = await reportService.create(postReportInfo);
    res.json(reportPost);
  };

  findReportedPosts: AsyncRequestHandler = async (req, res) => {
    const { status } = req.body;
    if (status === 0) {
      throw new Error("관리자가 아닙니다.");
    }
    const findReportedPosts = await reportService.findReportedPosts();
    res.json(findReportedPosts);
  };

  findByPostId: AsyncRequestHandler = async (req, res) => {
    const { postId } = req.params;
    const intPostId = parseInt(postId);
    const { status } = req.body;
    if (status === 0) {
      throw new Error("관리자가 아닙니다.");
    }
    const findByPostId = await reportService.findByPostId(intPostId);
    res.json(findByPostId);
  };

  delete: AsyncRequestHandler = async (req, res) => {
    const { postId } = req.params;
    const intPostId = parseInt(postId);
    const { status } = req.body;

    if (status === 0) {
      throw new Error("관리자가 아닙니다.");
    }

    const reportDelete = reportService.delete(intPostId);
    res.json(reportDelete);
  };
}

const reportController = new ReportController();
export { reportController };
