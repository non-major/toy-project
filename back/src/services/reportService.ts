import { report, IReportModel } from "../interface";
import { reportModel } from "../model/index";

export class ReportService {
  constructor(private commentModel: IReportModel) {}

  async findAll(): Promise<report[]> {
    return await reportModel.findAll();
  }

  async create(report: report): Promise<report> {
    return await reportModel.create(report);
  }

  async delete(reportId: number): Promise<report> {
    return await reportModel.delete(reportId);
  }
}

const reportService = new ReportService(reportModel);
export { reportService };
