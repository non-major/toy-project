import { report } from "../interface";
import { reportService } from "../services";
import { AsyncRequestHandler } from "../types";

interface reportControllerInterface {
  findAll: AsyncRequestHandler;
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
    const reportPost = reportService.create(postReportInfo);
    res.json(reportPost);
  };

  findAll: AsyncRequestHandler = async (req, res) => {
    const { status } = req.body;
    if (status === 0) {
      throw new Error("관리자가 아닙니다.");
    }
    const findAll = await reportService.findAll();
    res.json(findAll);
  };

  delete: AsyncRequestHandler = async (req, res) => {
    const { reportId } = req.params;
    const intUserId = parseInt(reportId);
    const { status } = req.body;

    if (status === 0) {
      throw new Error("관리자가 아닙니다.");
    }

    const reportDelete = reportService.delete(intUserId);
    res.json(reportDelete);
  };
}

const reportController = new ReportController();
export { reportController };
