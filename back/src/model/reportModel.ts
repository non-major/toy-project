import { pg } from "../db/database";
import { report, IReportModel } from "../interface";

export class ReportModel implements IReportModel {
  // 신고 생성
  async create(report: report): Promise<report> {
    const { postId, userId, type } = report;
    const newReport = await pg.query(
      `INSERT INTO reports ("postId", "userId", type) VALUES ($1,$2,$3)RETURNING*`,
      [postId, userId, type]
    );
    return newReport.rows[0];
  }

  // 신고 모두찾기 (관리자페이지)
  async findAll(): Promise<report[]> {
    const reports = await pg.query(`SELECT * FROM reports`);
    return reports.rows;
  }

  // 신고 삭제
  async delete(reportId: number): Promise<report> {
    const deleteReport = await pg.query(`DELETE FROM reports WHERE id = ($1)`, [
      reportId,
    ]);
    return deleteReport.rows[0];
  }
}

export const reportModel = new ReportModel();
