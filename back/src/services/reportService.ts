import { report, IReportModel } from "../interface";
import { reportModel } from "../model/index";

export class ReportService {
  constructor(private commentModel: IReportModel) {}

  async findReportedPosts(): Promise<report[]> {
    return await reportModel.findReportedPosts();
  }

  async findByPostId(postId: number): Promise<report[]> {
    return await reportModel.findByPostId(postId);
  }

  async create(report: report): Promise<report> {
    return await reportModel.create(report);
  }

  async delete(postId: number): Promise<report> {
    return await reportModel.delete(postId);
  }
}

const reportService = new ReportService(reportModel);
export { reportService };
