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

  // 신고된 모든 게시물 찾기 (관리자페이지)
  async findReportedPosts(): Promise<report[]> {
    const reports = await pg.query(
      `SELECT * FROM posts WHERE id in (SELECT DISTINCT "postId" FROM reports)`
    );
    return reports.rows;
  }

  // 게시물별 신고 리스트
  async findByPostId(postId: number): Promise<report[]> {
    const reports = await pg.query(
      `SELECT * FROM reports WHERE "postId" = ($1)`,
      [postId]
    );
    return reports.rows;
  }

  // 신고당한 게시물 삭제
  async delete(postId: number): Promise<report> {
    const deleteReport = await pg.query(`DELETE FROM posts WHERE id = ($1)`, [
      postId,
    ]);
    return deleteReport.rows[0];
  }
}

export const reportModel = new ReportModel();
